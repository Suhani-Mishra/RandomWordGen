// --- Get HTML Elements ---
const wordDisplayElement = document.getElementById('wordDisplay');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

// --- Word Data ---
// The word list is stored directly in this file.
const wordList = [
  "amber", "blend", "brisk", "chime", "crisp", "daisy", "dream", "ember",
  "fable", "flair", "flick", "fluff", "frost", "gaze", "gleam", "glide",
  "glint", "globe", "grace", "grasp", "grind", "haste", "hatch", "heave",
  "ivory", "jumbo", "knack", "latch", "lumen", "lunch", "lyric", "magic",
  "maple", "maven", "mirth", "moody", "noble", "notch", "oasis", "ocean",
  "orbit", "patch", "peace", "petal", "pixel", "plumb", "plush", "pride",
  "prize", "proxy", "pulse", "quest", "quill", "quiet", "radii", "relic",
  "rhyme", "ripple", "roast", "rustic", "scent", "shade", "shaft", "shine",
  "slice", "smile", "snack", "sound", "spark", "split", "sprout", "stark",
  "story", "swift", "swirl", "syrup", "thrive", "tranquil", "tundra", "unity",
  "vivid", "whims", "witty", "woven", "zesty", "zippy"
];

// --- Application State ---
let usedIndices = new Set();

// --- Core Functions ---

/**
 * Gets a unique word from the wordList that hasn't been used in the current session.
 * @returns {string} A unique word.
 */
function getUniqueWord() {
  // Reset if all words have been used
  if (usedIndices.size === wordList.length) {
    usedIndices.clear();
  }

  let finalIndex;
  do {
    finalIndex = Math.floor(Math.random() * wordList.length);
  } while (usedIndices.has(finalIndex));

  usedIndices.add(finalIndex);
  return wordList[finalIndex];
}

/**
 * Displays a final, unique word on the screen.
 */
function displayFinalWord() {
    const finalWord = getUniqueWord();
    wordDisplayElement.textContent = finalWord;
}

/**
 * Handles the "slot machine" animation.
 */
function startWordAnimation() {
    generateButton.disabled = true;

    const animationInterval = setInterval(() => {
        // Pick a purely random word for the animation (doesn't need to be unique)
        const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
        wordDisplayElement.textContent = randomWord;
    }, 50);

    setTimeout(() => {
        clearInterval(animationInterval);
        displayFinalWord(); // Display the final, unique word
        generateButton.disabled = false;
    }, 1000); // Animation duration: 1 second
}

/**
 * Copies the currently displayed word to the user's clipboard.
 */
function copyWordToClipboard() {
    const currentWord = wordDisplayElement.textContent;
    if (!currentWord) return;

    navigator.clipboard.writeText(currentWord).then(() => {
        copyButton.textContent = 'Copied!';
        // Change the text back after 2 seconds
        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// --- Initialize the Application ---

// Display the first word as soon as the page
