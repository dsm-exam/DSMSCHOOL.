const app = {
    state: {
        subject: null,
        questions: [],
        currentQuestion: 0,
        answers: {},
        marked: new Set(),
        timeRemaining: 0,
        totalTime: 0,
        timerInterval: null,
        examStarted: false,
        examFinished: false,
        calcExpression: ''
    },

    startExam() {
    const subject = document.getElementById('subjectSelect').value;
    const countSelect = document.getElementById('questionCount');
    let count = parseInt(countSelect.value);
    
    // Debug: Check what values are being read
    console.log('Subject selected:', subject);
    console.log('Count selected from dropdown:', count);
    
    // Handle "All Questions" option (value 0)
    if (count === 0) {
        count = questionBank[subject].length;
        console.log('Using all questions:', count);
    }
    
    this.state.subject = subject;
    this.state.questions = getQuestions(subject, count);
    
    // Debug: Check how many questions were actually loaded
    console.log('Questions loaded in state:', this.state.questions.length);
    
    this.state.totalTime = this.state.questions.length * 2 * 60;
    this.state.timeRemaining = this.state.totalTime;
    this.state.examStarted = true;
    this.state.currentQuestion = 0;
    this.state.answers = {};
    this.state.marked = new Set();

    // Update UI
    document.getElementById('examSubject').textContent = 
        subject.charAt(0).toUpperCase() + subject.slice(1);
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('examScreen').classList.remove('hidden');
    
    this.renderQuestion();
    this.renderPalette();  // This will create buttons based on this.state.questions.length
    this.startTimer();
    this.updateProgress();
    
    window.addEventListener('beforeunload', this.handleBeforeUnload);
    document.addEventListener('keydown', this.handleKeydown.bind(this));
},

    handleBeforeUnload(e) {
        if (app.state.examStarted && !app.state.examFinished) {
            e.preventDefault();
            e.returnValue = 'Are you sure you want to leave? Your exam progress will be lost.';
            return e.returnValue;
        }
    },

    handleKeydown(e) {
        if (!this.state.examStarted || this.state.examFinished) return;
        
        // Number keys 1-4 for options
        if (e.key >= '1' && e.key <= '4') {
            const optionIndex = parseInt(e.key) - 1;
            if (optionIndex < this.state.questions[this.state.currentQuestion].options.length) {
                this.selectOption(optionIndex);
            }
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowLeft') this.previousQuestion();
        if (e.key === 'ArrowRight') this.nextQuestion();
        
        // Space to toggle mark
        if (e.key === ' ') {
            e.preventDefault();
            this.toggleMarkCurrent();
        }
    },

    startTimer() {
        this.updateTimerDisplay();
        this.state.timerInterval = setInterval(() => {
            this.state.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.state.timeRemaining <= 0) {
                this.submitExam(true);
            }
        }, 1000);
    },

    updateTimerDisplay() {
        const hours = Math.floor(this.state.timeRemaining / 3600);
        const minutes = Math.floor((this.state.timeRemaining % 3600) / 60);
        const seconds = this.state.timeRemaining % 60;
        
        const display = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timeDisplay').textContent = display;
        
        const timerEl = document.getElementById('timer');
        if (this.state.timeRemaining < 300) { // Less than 5 minutes
            timerEl.classList.add('timer-warning');
        } else {
            timerEl.classList.remove('timer-warning');
        }
    },

    renderQuestion() {
        const question = this.state.questions[this.state.currentQuestion];
        const container = document.getElementById('optionsContainer');
        
        document.getElementById('questionNumber').textContent = 
            `Question ${this.state.currentQuestion + 1} of ${this.state.questions.length}`;
        document.getElementById('questionText').innerHTML= question.question;
        
        // Render options
        container.innerHTML = '';
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.onclick = () => this.selectOption(index);
            
            const labels = ['A', 'B', 'C', 'D'];
            const isSelected = this.state.answers[this.state.currentQuestion] === index;
            
            if (isSelected) btn.classList.add('selected');
            
            btn.innerHTML = `
                <div class="option-label">${labels[index]}</div>
                <div class="flex-1">${option}</div>
            `;
            
            container.appendChild(btn);
        });
        
        // Update mark checkbox
        document.getElementById('markReview').checked = 
            this.state.marked.has(this.state.currentQuestion);
        
        // Update navigation buttons
        document.getElementById('prevBtn').disabled = this.state.currentQuestion === 0;
        
        const nextBtn = document.getElementById('nextBtn');
        if (this.state.currentQuestion === this.state.questions.length - 1) {
            nextBtn.innerHTML = `Finish <i data-lucide="check-circle" class="w-5 h-5"></i>`;
            lucide.createIcons();
        } else {
            nextBtn.innerHTML = `Next <i data-lucide="chevron-right" class="w-5 h-5"></i>`;
            lucide.createIcons();
        }
        
        this.updatePalette();
    },

    selectOption(index) {
        this.state.answers[this.state.currentQuestion] = index;
        this.renderQuestion();
        this.updatePalette();
        this.updateProgress();
    },

    previousQuestion() {
        if (this.state.currentQuestion > 0) {
            this.state.currentQuestion--;
            this.renderQuestion();
        }
    },

    nextQuestion() {
        if (this.state.currentQuestion < this.state.questions.length - 1) {
            this.state.currentQuestion++;
            this.renderQuestion();
        } else {
            this.submitExam();
        }
    },

    goToQuestion(index) {
        this.state.currentQuestion = index;
        this.renderQuestion();
    },

    toggleMarkCurrent() {
        const current = this.state.currentQuestion;
        if (this.state.marked.has(current)) {
            this.state.marked.delete(current);
        } else {
            this.state.marked.add(current);
        }
        this.updatePalette();
    },

    renderPalette() {
    const container = document.getElementById('questionPalette');
    container.innerHTML = ''; // Clear existing buttons
    
    // Debug: Check how many buttons we're creating
    console.log('Creating palette with', this.state.questions.length, 'buttons');
    
    // Create buttons for EACH question in the array
    for (let i = 0; i < this.state.questions.length; i++) {
        const btn = document.createElement('button');
        btn.className = 'palette-btn';
        btn.textContent = i + 1;
        btn.onclick = () => this.goToQuestion(i);
        container.appendChild(btn);
    }
    
    this.updatePalette();
},

    updatePalette() {
        const buttons = document.querySelectorAll('.palette-btn');
        buttons.forEach((btn, index) => {
            btn.className = 'palette-btn';
            
            if (index === this.state.currentQuestion) {
                btn.classList.add('current');
            }
            
            if (this.state.answers[index] !== undefined) {
                btn.classList.add('answered');
            } else if (index < this.state.currentQuestion) {
                btn.classList.add('not-answered');
            } else {
                btn.classList.add('not-visited');
            }
            
            if (this.state.marked.has(index)) {
                btn.classList.add('marked');
            }
        });
    },

    updateProgress() {
        const answered = Object.keys(this.state.answers).length;
        const total = this.state.questions.length;
        const percentage = (answered / total) * 100;
        
        document.getElementById('progressText').textContent = `${answered}/${total}`;
        document.getElementById('progressBar').style.width = `${percentage}%`;
    },

    submitExam(auto = false) {
        const unanswered = this.state.questions.length - Object.keys(this.state.answers).length;
        
        if (!auto && unanswered > 0) {
            document.getElementById('unansweredCount').textContent = unanswered;
            document.getElementById('submitModal').classList.remove('hidden');
            return;
        }
        
        this.finishExam();
    },

    closeSubmitModal() {
        document.getElementById('submitModal').classList.add('hidden');
    },

    confirmSubmit() {
        this.closeSubmitModal();
        this.finishExam();
    },

    finishExam() {
        this.state.examFinished = true;
        clearInterval(this.state.timerInterval);
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
        
        const timeTaken = this.state.totalTime - this.state.timeRemaining;
        const correct = this.calculateScore();
        const total = this.state.questions.length;
        const percentage = Math.round((correct / total) * 100);
        
        // Display results
        document.getElementById('examScreen').classList.add('hidden');
        document.getElementById('resultsScreen').classList.remove('hidden');
        
        document.getElementById('scorePercentage').textContent = `${percentage}%`;
        document.getElementById('scorePercentage').className = 
            `text-3xl font-bold mb-1 ${percentage >= 50 ? 'text-emerald-600' : 'text-red-600'}`;
        document.getElementById('correctCount').textContent = `${correct}/${total}`;
        
        const hours = Math.floor(timeTaken / 3600);
        const minutes = Math.floor((timeTaken % 3600) / 60);
        const seconds = timeTaken % 60;
        document.getElementById('timeTaken').textContent = 
            `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        // Generate detailed review
        this.generateResultsDetails();
        
        // Save to localStorage for history
        this.saveResult(percentage, correct, total);
    },

    calculateScore() {
        let correct = 0;
        this.state.questions.forEach((q, index) => {
            if (this.state.answers[index] === q.correct) {
                correct++;
            }
        });
        return correct;
    },

    generateResultsDetails() {
        const container = document.getElementById('resultsDetails');
        container.innerHTML = '';
        
        this.state.questions.forEach((q, index) => {
            const userAnswer = this.state.answers[index];
            const isCorrect = userAnswer === q.correct;
            const isSkipped = userAnswer === undefined;
            
            const div = document.createElement('div');
            div.className = `p-4 rounded-lg border ${
                isSkipped ? 'bg-slate-50 border-slate-200' :
                isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'
            }`;
            
            const statusIcon = isSkipped ? 'minus-circle' : 
                              isCorrect ? 'check-circle' : 'x-circle';
            const statusColor = isSkipped ? 'text-slate-400' : 
                               isCorrect ? 'text-emerald-600' : 'text-red-600';
            
            div.innerHTML = `
                <div class="flex items-start gap-3">
                    <i data-lucide="${statusIcon}" class="w-5 h-5 ${statusColor} mt-0.5"></i>
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                            <span class="font-semibold text-slate-900">Question ${index + 1}</span>
                            ${this.state.marked.has(index) ? '<span class="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded">Marked</span>' : ''}
                        </div>
                        <p class="text-slate-700 mb-2 text-sm">${q.question}</p>
                        ${!isSkipped ? `
                            <p class="text-sm ${isCorrect ? 'text-emerald-700' : 'text-red-700'} mb-1">
                                Your answer: ${q.options[userAnswer] || 'Invalid'}
                            </p>
                        ` : '<p class="text-sm text-slate-500 mb-1">Not answered</p>'}
                        ${!isCorrect ? `
                            <p class="text-sm text-emerald-700">
                                Correct answer: ${q.options[q.correct]}
                            </p>
                            <p class="text-xs text-slate-600 mt-2 bg-white/50 p-2 rounded">
                                <strong>Explanation:</strong> ${q.explanation}
                            </p>
                        ` : ''}
                    </div>
                </div>
            `;
            
            container.appendChild(div);
        });
        
        lucide.createIcons();
    },

    saveResult(percentage, correct, total) {
        const history = JSON.parse(localStorage.getItem('examHistory') || '[]');
        history.push({
            date: new Date().toISOString(),
            subject: this.state.subject,
            percentage,
            correct,
            total,
            timeTaken: this.state.totalTime - this.state.timeRemaining
        });
        localStorage.setItem('examHistory', JSON.stringify(history.slice(-10))); // Keep last 10
    },

    reviewExam() {
        // Go back to exam view in review mode
        document.getElementById('resultsScreen').classList.add('hidden');
        document.getElementById('examScreen').classList.remove('hidden');
        
        // Add review mode indicators
        this.renderQuestionWithAnswers();
    },

    renderQuestionWithAnswers() {
        const question = this.state.questions[this.state.currentQuestion];
        const container = document.getElementById('optionsContainer');
        const userAnswer = this.state.answers[this.state.currentQuestion];
        const isCorrect = userAnswer === question.correct;
        
        document.getElementById('questionNumber').textContent = 
            `Review: Question ${this.state.currentQuestion + 1} of ${this.state.questions.length}`;
        
        // Show result banner
        const resultBanner = document.createElement('div');
        resultBanner.className = `mb-4 p-3 rounded-lg font-semibold text-center ${
            userAnswer === undefined ? 'bg-slate-200 text-slate-700' :
            isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
        }`;
        resultBanner.textContent = userAnswer === undefined ? 'Not Answered' :
                                   isCorrect ? 'Correct!' : 'Incorrect';
        
        const questionText = document.getElementById('questionText');
        questionText.innerHTML = '';
        questionText.appendChild(resultBanner);
        questionText.appendChild(document.createTextNode(question.question));
        
        // Render options with correct/incorrect indicators
        container.innerHTML = '';
        question.options.forEach((option, index) => {
            const btn = document.createElement('div');
            let className = 'option-btn ';
            
            if (index === question.correct) {
                className += 'correct';
            } else if (index === userAnswer && !isCorrect) {
                className += 'wrong';
            } else {
                className += 'opacity-50';
            }
            
            btn.className = className;
            
            const labels = ['A', 'B', 'C', 'D'];
            const icons = index === question.correct ? 'check' : 
                         (index === userAnswer ? 'x' : '');
            
            btn.innerHTML = `
                <div class="option-label">${labels[index]}</div>
                <div class="flex-1">${option}</div>
                ${icons ? `<i data-lucide="${icons}" class="w-5 h-5"></i>` : ''}
            `;
            
            container.appendChild(btn);
        });
        
        // Add explanation
        const explanation = document.createElement('div');
        explanation.className = 'mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg';
        explanation.innerHTML = `
            <div class="flex items-center gap-2 mb-2 text-blue-800 font-semibold">
                <i data-lucide="info" class="w-5 h-5"></i>
                Explanation
            </div>
            <p class="text-blue-900 text-sm">${question.explanation}</p>
        `;
        container.appendChild(explanation);
        
        // Update navigation
        document.getElementById('prevBtn').disabled = this.state.currentQuestion === 0;
        const nextBtn = document.getElementById('nextBtn');
        nextBtn.innerHTML = this.state.currentQuestion === this.state.questions.length - 1 ? 
            'Back to Results <i data-lucide="arrow-right" class="w-5 h-5"></i>' :
            'Next <i data-lucide="chevron-right" class="w-5 h-5"></i>';
        nextBtn.onclick = () => {
            if (this.state.currentQuestion === this.state.questions.length - 1) {
                document.getElementById('examScreen').classList.add('hidden');
                document.getElementById('resultsScreen').classList.remove('hidden');
            } else {
                this.state.currentQuestion++;
                this.renderQuestionWithAnswers();
            }
        };
        
        lucide.createIcons();
    },

    
    calcInput(val) {
        if (this.state.calcExpression.length > 15) return;
        this.state.calcExpression += val;
        document.getElementById('calcDisplay').textContent = this.state.calcExpression;
    },

    calcClear() {
        this.state.calcExpression = '';
        document.getElementById('calcDisplay').textContent = '0';
    },

    calcDelete() {
        this.state.calcExpression = this.state.calcExpression.slice(0, -1);
        document.getElementById('calcDisplay').textContent = 
            this.state.calcExpression || '0';
    },

    calcCalculate() {
        try {
            // Safe evaluation - only allow numbers and basic operators
            const safeExpr = this.state.calcExpression.replace(/[^0-9+\-*/.()]/g, '');
            if (safeExpr) {
                const result = Function('"use strict";return (' + safeExpr + ')')();
                this.state.calcExpression = String(Number(result.toFixed(4)));
                document.getElementById('calcDisplay').textContent = this.state.calcExpression;
            }
        } catch (e) {
            document.getElementById('calcDisplay').textContent = 'Error';
            setTimeout(() => this.calcClear(), 1500);
        }
    }
};

// Make app globally available for HTML event handlers
window.app = app;