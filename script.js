// 1. YOUR WORD LIST
// Keep all your clean, 3-8 character words here.
const wordList = [
    "dream", "smile", "ocean", "happy", "magic", "pixel", "quest", "vivid",
    "breeze", "cloud", "peace", "spark", "quiet", "shine", "glide", "crisp",
    "flame", "frost", "glow", "jolly", "lemon", "meadow", "noble", "plumb"
];

// 2. GET HTML ELEMENTS
// Connect our script to the HTML elements on the page.
const wordDisplayElement = document.getElementById('wordDisplay');
const generateButton = document.getElementById('generateButton');

// 3. THE LOGIC
// A Set is used to keep track of words we've already shown in this session.
let usedIndices = new Set();

function generateUniqueWord() {
    // If we've used all the words, reset the list to start over.
    if (usedIndices.size === wordList.length) {
        usedIndices.clear();
    }

    let randomIndex;
    // Keep looking for a random word until we find one we haven't used yet.
    do {
        randomIndex = Math.floor(Math.random() * wordList.length);
    } while (usedIndices.has(randomIndex));

    // Mark this word's index as "used".
    usedIndices.add(randomIndex);

    // Get the new word from our list.
    const newWord = wordList[randomIndex];
    
    // Display the new word on the page.
    wordDisplayElement.textContent = newWord;
}

// 4. EVENT LISTENER
// Tell the button to run our function every time it's clicked.
generateButton.addEventListener('click', generateUniqueWord);

// 5. INITIAL WORD
// Generate a word as soon as the page loads.
generateUniqueWord();
