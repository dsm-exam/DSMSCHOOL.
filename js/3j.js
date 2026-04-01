const questionBank = {
    english: [
        {
            question: "Choose the correct word to complete the sentence: 'The students _______ their homework before the teacher arrived.'",
            options: ["has completed", "have completed", "had completed", "completing"],
            correct: 2,
            explanation: "Past perfect tense is used to show that one action was completed before another in the past."
        },
        {
            question: "Which of the following is a synonym for 'ubiquitous'?",
            options: ["Rare", "Omnipresent", "Unique", "Hidden"],
            correct: 1,
            explanation: "Ubiquitous means present, appearing, or found everywhere."
        },
        {
            question: "Identify the figure of speech: 'The wind whispered through the trees.'",
            options: ["Simile", "Metaphor", "Personification", "Hyperbole"],
            correct: 2,
            explanation: "Personification gives human qualities to non-human things."
        },
        {
            question: "Choose the correctly punctuated sentence:",
            options: [
                "However we must leave immediately.",
                "However, we must leave immediately.",
                "However; we must leave immediately.",
                "However: we must leave immediately."
            ],
            correct: 1,
            explanation: "A comma should follow a transitional word like 'however' when it starts a sentence."
        },
        {
            question: "What is the plural form of 'analysis'?",
            options: ["Analysises", "Analyses", "Analysiss", "Analysi"],
            correct: 1,
            explanation: "Words ending in -is change to -es in plural (analysis → analyses)."
        },
        {
            question: "Select the word with the correct spelling:",
            options: ["Accomodate", "Accommodate", "Acommodate", "Acommmodate"],
            correct: 1,
            explanation: "Accommodate has two c's and two m's."
        },
        {
            question: "The _______ of the project depends on funding.",
            options: ["success", "succeed", "successful", "successfully"],
            correct: 0,
            explanation: "The definite article 'the' requires a noun (success)."
        },
        {
            question: "Which sentence is in the passive voice?",
            options: [
                "The chef cooked the meal.",
                "The meal was cooked by the chef.",
                "The chef is cooking the meal.",
                "The chef will cook the meal."
            ],
            correct: 1,
            explanation: "Passive voice emphasizes the receiver of the action (was cooked)."
        },
        {
            question: "Choose the correct preposition: 'She is proficient _______ mathematics.'",
            options: ["at", "in", "on", "with"],
            correct: 1,
            explanation: "The standard collocation is 'proficient in'."
        },
        {
            question: "What type of clause is 'because it was raining'?",
            options: ["Main clause", "Noun clause", "Adverbial clause", "Relative clause"],
            correct: 2,
            explanation: "It modifies the verb by giving a reason (adverbial function)."
        }
    ],
    
    mathematics: [
        {
            question: "If f(x) = 2x² + 3x - 5, what is f(2)?",
            options: ["9", "7", "11", "13"],
            correct: 0,
            explanation: "f(2) = 2(4) + 3(2) - 5 = 8 + 6 - 5 = 9"
        },
        {
            question: "What is the derivative of f(x) = x³ with respect to x?",
            options: ["x²", "3x²", "3x", "x³"],
            correct: 1,
            explanation: "Using the power rule: d/dx(xⁿ) = nxⁿ⁻¹, so d/dx(x³) = 3x²"
        },
        {
            question: "Solve for x: 2x + 5 = 13",
            options: ["3", "4", "9", "18"],
            correct: 1,
            explanation: "2x = 13 - 5 = 8, therefore x = 4"
        },
        {
            question: "What is the value of sin(30°)?",
            options: ["0.5", "0.707", "0.866", "1"],
            correct: 0,
            explanation: "sin(30°) = 1/2 = 0.5"
        },
        {
            question: "If a triangle has angles of 60° and 70°, what is the third angle?",
            options: ["30°", "40°", "50°", "60°"],
            correct: 2,
            explanation: "Sum of angles = 180°, so 180 - 60 - 70 = 50°"
        },
        {
            question: "What is the area of a circle with radius 7 cm? (Use π = 22/7)",
            options: ["154 cm²", "44 cm²", "308 cm²", "22 cm²"],
            correct: 0,
            explanation: "Area = πr² = (22/7) × 49 = 154 cm²"
        },
        {
            question: "Solve: log₂(32) = ?",
            options: ["4", "5", "6", "16"],
            correct: 1,
            explanation: "2⁵ = 32, therefore log₂(32) = 5"
        },
        {
            question: "What is the sum of the first 10 terms of the arithmetic sequence: 2, 5, 8, 11...?",
            options: ["155", "165", "175", "185"],
            correct: 0,
            explanation: "S₁₀ = (10/2)[2(2) + (9)(3)] = 5[4 + 27] = 5 × 31 = 155"
        },
        {
            question: "If the probability of an event is 0.3, what is the probability of it not occurring?",
            options: ["0.3", "0.5", "0.7", "1.3"],
            correct: 2,
            explanation: "P(not E) = 1 - P(E) = 1 - 0.3 = 0.7"
        },
        {
            question: "What is the determinant of the matrix [[2, 3], [1, 4]]?",
            options: ["5", "11", "-5", "10"],
            correct: 0,
            explanation: "det = (2×4) - (3×1) = 8 - 3 = 5"
        }
    ],
    
    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Watt", "Joule", "Newton", "Pascal"],
            correct: 2,
            explanation: "Force is measured in Newtons (N)."
        },
        {
            question: "If a car accelerates from rest to 20 m/s in 4 seconds, what is its acceleration?",
            options: ["4 m/s²", "5 m/s²", "20 m/s²", "80 m/s²"],
            correct: 1,
            explanation: "a = Δv/Δt = (20-0)/4 = 5 m/s²"
        },
        {
            question: "What is the speed of light in vacuum approximately?",
            options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
            correct: 0,
            explanation: "Speed of light c ≈ 3 × 10⁸ m/s"
        },
        {
            question: "According to Newton's Third Law, for every action there is:",
            options: [
                "An equal and opposite reaction",
                "A greater reaction",
                "No reaction",
                "A perpendicular reaction"
            ],
            correct: 0,
            explanation: "Newton's Third Law states action and reaction are equal and opposite."
        },
        {
            question: "What is the formula for kinetic energy?",
            options: ["mgh", "½mv²", "mv", "F×d"],
            correct: 1,
            explanation: "Kinetic energy = ½ × mass × velocity²"
        },
        {
            question: "In a circuit, if voltage is 12V and resistance is 4Ω, what is the current?",
            options: ["3A", "48A", "0.33A", "8A"],
            correct: 0,
            explanation: "Ohm's Law: I = V/R = 12/4 = 3A"
        },
        {
            question: "What type of wave is a sound wave?",
            options: ["Transverse", "Longitudinal", "Electromagnetic", "Surface"],
            correct: 1,
            explanation: "Sound waves are longitudinal mechanical waves."
        },
        {
            question: "What is the acceleration due to gravity on Earth approximately?",
            options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "98 m/s²"],
            correct: 0,
            explanation: "Standard value is 9.8 m/s² (often approximated as 10 m/s²)"
        },
        {
            question: "Which of the following is a vector quantity?",
            options: ["Mass", "Temperature", "Velocity", "Time"],
            correct: 2,
            explanation: "Velocity has both magnitude and direction."
        },
        {
            question: "What is the principle of conservation of energy?",
            options: [
                "Energy can be created but not destroyed",
                "Energy can be destroyed but not created",
                "Energy cannot be created or destroyed, only transformed",
                "Energy remains constant in all forms"
            ],
            correct: 2,
            explanation: "Energy is conserved; it changes form but total amount remains constant."
        }
    ],
    
    chemistry: [
    // Original 10 chemistry questions
    {
        question: "Which of the following set of quantum numbers is CORRECT  ",
        options: ["n=5,l=4,ml=0", "n=5,l=4,ml=5", "n=4,l=4,ml=1", "n=1,l=0,ml=1"],
        correct: 0,
        explanation: " "
    },
    {
        question: "How many 3d electrons are present in the ground state electron configuration of 25V  ",
        options: ["6", "10", "5", "0"],
        correct: 2,
        explanation: " "
    },
    {
        question: "In which region of the periodic table would the element with the electron configuration below be located  [Kr]5s<sup>2</sup>4d<sup>10</sup>5p<sup>1<sup>",
        options: ["Block-p, Period 5,Group III", "Block-p, Period 4,Group III", "Block-p, Period 5,Group I", "Block-s, Period 4,Group I"],
        correct: 0,
        explanation: " "
    },
    {
        question: "An element X has two naturally occurring isotopes x-10 amu and x- 11amu.the first isotope accounts for 20% and the second accounts 80%. What is the average atomic mass of the element x",
        options: ["20.2", "10.8", "6.8", "20.0"],
        correct: 1,
        explanation: " "
    },
    {
        question: "What is the frequency in Hz of the gamma radiation  from radio active cobalt-60 line source of its wave length is 1X10<sup>-9</sup>nm",
        options: ["3.3X10<sup>-27</sup> Hz", "1.13X10<sup>-8</sup>Hz", "3.38X10<sup>18</sup>Hz", "3X10<sup>26</sup> Hz"],
        correct: 3,
        explanation: " "
    },
    {
        question: "Among the following which colors corresponds to light of the highest frequency",
        options: ["Blue", "Yellow", "Red", "Green"],
        correct: 2,
        explanation: "  "
    },
    {
        question: "The Heisenberg principle states that    ",
        options: ["No two electrons in an atom have the same four quantum numbers",
         "Two atom of the same elements must have the same number of protons", 
        "Its impossible to determine accurately  both the position and momentum of an electron simultaneously",
         "Electron of an atom in their ground state energetically equivalent set of orbital’s singly before they pair up in any orbital’s of the set"],
        correct: 2,
        explanation: "  "
    },
    {
        question: "Which one of the following molecule has v-shaped molecular geometry",
        options: ["H<sub>2</sub>O", "NH<sub>3</sub>", "I<sub>3</sub><sup>-</sup>", "CO<sub>2</sub>"],
        correct: 0,
        explanation: ""
    },
    {
        question: "Which one the following <b>nonpolar</b> covalent molecule",
        options: ["HF", "H<sub>2</sub>O", "CO<sub>2</sub>", "CHCl<sub>3</sub>"],
        correct: 2,
        explanation: "  "
    },
    {
        question: "What is the bond order of O<sub>2</sub><sup>2-</sup>",
        options: ["1.5", "2", "2.5", "1"],
        correct: 3 ,
        explanation: ""
    },
    
    // 20 new chemistry questions (keep these as they are)
    {
        question: "What is the molar mass of water (H₂O)?",
        options: ["16 g/mol", "17 g/mol", "18 g/mol", "20 g/mol"],
        correct: 2,
        explanation: "H₂O: (2 × 1) + 16 = 18 g/mol"
    },
    {
        question: "Which one of the following covalent molecule <b>cannot</b> show resonance structure ",
        options: ["HNO<sub>3</sub>", "NO<sub>3</sub><sup>-</sup>", "CO<sub>3</sub><sup>2-</sup>", "PCl<sub>5</sub>"],
        correct: 3,
        explanation: "  "
    },
    {
        question: "What is the predominant intermolecular force of attractive force exists in between NH<sub>3</sub molecules",
        options: ["Hydrogen bonding", "Dipole -Dipole force", "London force", "Ion dipole force"],
        correct: 0,
        explanation: "  "
    },
    {
        question: "How many lone pair and bonding pair of electrons are there in the central atom of   N  in NCl<sub>3</sub",
        options: ["1,3", "3,1", "2,3", "3,2"],
        correct: 0,
        explanation: "  "
    },
    {
        question: "What is the formal charge of S in SO<sub>4</sub><sup>2-</sup> molecule",
        options: ["0", "1", "2", "-1"],
        correct: 0,
        explanation: ")"
    },
    {
        question: "How many different orbital’s have in sp<sup>3</sup>d<sup>2</sup> hybridized orbital’s ",
        options: ["2", "3", "5", "6"],
        correct: 3,
        explanation: " "
    },
    {
        question: "Which of the following molecule <b>does not</b> show a coordinate covalent bond ",
        options: ["NH<sub>4</sub><sup>+</sup>", "H<sub>3</sub>O<sup>+</sup>", "NH<sub>3</sub>-BF<sub>3</sub>", "HCl"],
        correct: 2,
        explanation: " "
    },
    {
        question: "Which set of quantum numbers (n, l, mₗ, mₛ) is not possible?",
        options: ["1, 0, 0, ½", "1, 1, 0, ½", "1, 0, 0, -½", "2, 1, -1, ½"],
        correct: 1,
        explanation: "  "
    },
    {
        question: "Which of the following transitions will emit maximum energy in the hydrogen atom?",
        options: ["n=4 → n=3", "n=4 → n=2", "n=2 → n=1", "n=3 → n=2"],
        correct: 1,
        explanation: "  "
    },
    {
        question: "Which of the following is <b>NOT</b> true about cathode rays? Cathode rays:",
        options: [" Are common constituents of all matter and their m/e is constant for all gases.",
         "Contain particles, which are positively charged.",
         "Travel in straight lines from cathode to the anode.", 
         "Contain particles, which are negatively charged."],
        correct: 1,
        explanation: "  "
    },
    {
        question: "Which of the following quantum number(s) is (are) related to the size and energy of an electron in a hydrogen atom? ",
        options: ["n", " n, l", "n, l, mₗ", "n, l, mₗ, mₛ"],
        correct: 0,
        explanation: "  "
    },
    {
        question: "What is the shape of a molecule with sp³ hybridization?",
        options: ["Linear", "Trigonal planar", "Tetrahedral", "Octahedral"],
        correct: 2,
        explanation: "sp³ hybridization results in a tetrahedral geometry (e.g., methane, CH₄)."
    },
    {
        question: "Which of the following is an alkali metal?",
        options: ["Calcium", "Magnesium", "Sodium", "Aluminum"],
        correct: 2,
        explanation: "Sodium (Na) is in Group 1, the alkali metals."
    },
    {
        question: "Which of the following statements is TRUE?",
        options: ["Ultraviolet light has longer wavelength than visible light.",
         "The energy of radiation decreases as the wavelength decreases.", 
         "The frequency of radiation increases as the wavelength decreases.", 
         " Wave number of an electromagnetic radiation increases as wave length increases." 
        ],
        correct: 2,
        explanation: "  " 
    },
    {
        question: "Which type of bond involves complete transfer of electrons?",
        options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
        correct: 1,
        explanation: "Ionic bonds involve transfer of electrons from metal to nonmetal."
    },
    {
        question: "What are the quantum numbers for the 5s orbital?",
        options: ["n=5, l=0, mₗ=-1, mₛ=±1/2",
                  "n=5, l=1, mₗ=-2, mₛ=±1/2", 
                  "n=5, l=2, mₗ=-2, mₛ=±1/2", 
                  "n=5, l=0, mₗ=0, mₛ=±1/2"],
        correct: 2,
        explanation: "  "
    },
    {
        question: "The attractive force between molecules is known as:",
        options: ["Lattice force", " Intramolecular forces", "Nuclear force", "Intermolecular force"],
        correct: 3,
        explanation: "  "
    },
    {
        question: "Which of the following belongs to chemical bonding theories?",
        options: ["Valence bond theory and valence shell electron pair repulsion theory.",
         "Molecular orbital theory and kinetic molecular theory.",
          "Valance bond theory and molecular orbital theory.", 
          " Kinetic-molecular theory and valance shell pair repulsion."],
        correct: 2,
        explanation: "  "
    },
    {
        question: "What is the oxidation number of hydrogen in most compounds?",
        options: ["-1", "0", "+1", "+2"],
        correct: 2,
        explanation: "Hydrogen typically has +1 oxidation state (except metal hydrides where it's -1)."
    },
    {
        question: "Which of the following is not true about the photoelectric effect?",
        options: ["Most metals require ultraviolet light to emit electrons.",
         "A bright light causes more electrons to be emitted than a weak light.",
          "A bright light causes less electrons to be emitted than a weak light", 
          "Higher frequency light emits electrons with higher kinetic energy."],
        correct: 2,
        explanation: "  "
    }
],
    
 Geography: [
    {
        question: "In which one of the following continents were the least COVID-19 cases reported in 2021?",
        options: ["Europe", "Africa", "South America", "North America"],
        correct: 1,
        explanation: "Africa had significantly fewer COVID-19 cases compared to other continents, possibly due to younger demographics and limited international travel."
    },
    {
        question: "Which one of the following is a reddish-brown toxic gas that causes air pollution?",
        options: ["Methane", "Carbon monoxide", "Sulphur dioxide", "Nitrogen dioxide"],
        correct: 3,
        explanation: "Nitrogen dioxide (NO₂) is a reddish-brown gas, primarily produced by combustion engines, and contributes to air pollution."
    },
    {
        question: "What causes soil contamination?",
        options: ["Raw material leakage into the soil from industries", "Addition of different chemicals that were farmed", "Keeping farmland idle for several years", "Refusing to clean substances from the soil"],
        correct: 0,
        explanation: "Industrial waste and raw materials, such as chemicals and heavy metals, can leak into the soil and cause contamination."
    },
    {
        question: "How can the problems of environmental sustainability be reduced?",
        options: ["By reducing people's per-capita food consumption", "By abstaining from using non-renewable energy sources", "By helping governments to process its products", "By promoting intensive application of agricultural inputs"],
        correct: 1,
        explanation: "Reducing reliance on non-renewable energy helps decrease environmental degradation and ensures sustainability."
    },
    {
        question: "Which one of the following is the characteristic of environmental education?",
        options: ["It aims at encouraging maximum resource utilization.", "It is an interdisciplinary education for human beings.", "It is short-term training on environmental issues.", "It is limited to the natural aspect of an environment."],
        correct: 1,
        explanation: "Environmental education integrates social, political, and scientific knowledge to address environmental issues."
    },
    {
        question: "Which type of environmental movement recommends promotion of property rights as a tool for conserving the environment?",
        options: ["Dark greens environmentalism", "Population environmentalism", "Preservation environmentalism", "Free market environmentalism"],
        correct: 3,
        explanation: "Free market environmentalism advocates for property rights and market solutions to environmental conservation."
    },
    {
        question: "What is the common environment-friendly indigenous knowledge practice in wet highland landscapes of Western Ethiopia?",
        options: ["Preservation of medicinal plants and animals", "Consideration of the scarce water resource", "Construction of stone terraces along the hills", "Refraining from trading natural resources"],
        correct: 2,
        explanation: "Stone terraces are used to prevent soil erosion and preserve water in the highlands."
    },
    {
        question: "What distinguishes a population census from other sources of population data?",
        options: ["It is used to supplement data collected by other sources.", "It is less expensive compared to other sources of data.", "It collects data from merely a segment of the population.", "It is conducted at a specified time interval."],
        correct: 3,
        explanation: "A population census is typically conducted at regular intervals (e.g., every 10 years) and aims to cover the entire population."
    },
    {
        question: "Which one of the following conditions characterizes a rural settlement? It is a settlement where",
        options: ["there is a diverse economic base.", "isolated homesteads are the dominant.", "population density is higher than urban areas.", "the service sector leads the economy."],
        correct: 1,
        explanation: "Rural settlements typically consist of fewer people living in more isolated or spread-out conditions compared to urban areas."
    },
    {
        question: "Which one of the following explains quaternary economic activities?",
        options: ["They are mainly engaged in extraction of raw materials.", "They are concerned with distribution and provision of products.", "They involve specialized knowledge and skills.", "They focus on the modification of raw materials by consumption."],
        correct: 2,
        explanation: "Quaternary economic activities include industries like research, information technology, and education that require high levels of specialized knowledge and skills."
    }
],
    
    
};

// Function to get random questions from a subject
function getQuestions(subject, count) {
    const bank = questionBank[subject] || questionBank.english;
    
    console.log('getQuestions called with count:', count);
    console.log('Bank size:', bank.length);
    
    // If count is greater than bank size, return all questions
    if (count > bank.length) {
        console.log('Count exceeds bank size, returning all', bank.length, 'questions');
        return [...bank]; // Return a copy of all questions
    }
    
    // Shuffle and return requested number
    const shuffled = [...bank].sort(() => 0.5 - Math.random());
    const result = shuffled.slice(0, count);
    
    console.log('Returning', result.length, 'questions');
    return result;
}