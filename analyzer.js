document.addEventListener("DOMContentLoaded" , 
function () {
    const analyzerButton = document.getElementById("analyzerButton");
    analyzerButton.addEventListener("click" , analyzeText);
});

function analyzeText() {
    const textInput = document.getElementById("textInput").value;
    const wordCount = textInput.trim().split(/\s+/).length;
    const charCount = textInput.length;
    const sentCount = sentencesCount(textInput);
    let totalWordLength = 0;

    textInput.trim().split(/\s+/).forEach((word) => {
        totalWordLength += word.length;
    });
   
    displayResults(wordCount, charCount , sentCount );

}

function displayResults(wordCount, charCount , sentCount) {
    const wordCountSpan = document.getElementById("wordCount");
    const charCountSpan = document.getElementById("charCount");
    const sentCountSpan = document.getElementById("sentCount");

    wordCountSpan.textContent = wordCount;
    charCountSpan.textContent = charCount;
    sentCountSpan.textContent = sentCount;
}

function sentencesCount(text) {
    
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    return sentences.length;
}























// document.addEventListener("DOMContentLoaded", function () { ... });:

// This line adds an event listener that listens for the "DOMContentLoaded" event, which is fired when the HTML document has been completely loaded and parsed.
// const analyzerButton = document.getElementById("analyzerButton");:

// This line gets a reference to an HTML element with the id attribute "analyzerButton" and stores it in the analyzerButton variable.
// analyzerButton.addEventListener("click", analyzeText);:

// This line adds a click event listener to the analyzerButton element. When the button is clicked, it will execute the analyzeText function.
// function analyzeText() { ... }:

// This defines the analyzeText function, which will be executed when the "Analyze" button is clicked.
// const textInput = document.getElementById("textInput").value;:

// This line gets the value of the HTML element with the id attribute "textInput" and stores it in the textInput variable. This value represents the text entered or pasted into the textarea.
// const wordCount = textInput.trim().split(/\s+/).length;:

// This line calculates the word count by first trimming any leading or trailing whitespace from the textInput, then splitting the remaining text into an array of words using regular expression \s+ to split on one or more whitespace characters, and finally, it gets the length of the resulting array.
// const charCount = textInput.length;:

// This line calculates the character count by simply getting the length of the textInput, including spaces and other characters.
// const sentCount = sentencesCount(textInput);:

// This line calculates the sentence count by calling the sentencesCount function and passing the textInput as an argument.
// let totalWordLength = 0;:

// This initializes a variable totalWordLength to 0, which will be used to calculate the total length of all words in the text.
// textInput.trim().split(/\s+/).forEach((word) => { ... });:

// This line splits the textInput into words (using the same regex \s+ to split on spaces) and then iterates over each word using the forEach method. In the callback function, it calculates the length of each word and adds it to totalWordLength.
// displayResults(wordCount, charCount, sentCount);:

// This line calls the displayResults function with the calculated wordCount, charCount, and sentCount as arguments.
// function displayResults(wordCount, charCount, sentCount) { ... }:

// This defines the displayResults function, which takes wordCount, charCount, and sentCount as parameters.
// const wordCountSpan = document.getElementById("wordCount");:

// This line gets a reference to an HTML element with the id attribute "wordCount" and stores it in the wordCountSpan variable.
// const charCountSpan = document.getElementById("charCount");:

// This line gets a reference to an HTML element with the id attribute "charCount" and stores it in the charCountSpan variable.
// const sentCountSpan = document.getElementById("sentCount");:

// This line gets a reference to an HTML element with the id attribute "sentCount" and stores it in the sentCountSpan variable.
// wordCountSpan.textContent = wordCount;:

// This line sets the text content of the wordCountSpan element to the calculated wordCount.
// charCountSpan.textContent = charCount;:

// This line sets the text content of the charCountSpan element to the calculated charCount.
// sentCountSpan.textContent = sentCount;:

// This line sets the text content of the sentCountSpan element to the calculated sentCount, displaying the sentence count in the HTML.
// function sentencesCount(text) { ... }:

// This defines the sentencesCount function, which takes text as a parameter and calculates the sentence count by splitting the text into sentences based on common punctuation marks and then counting the non-empty sentences.
// This code calculates and displays word count, character count, and sentence count based on the input text when the "Analyze" button is clicked.
