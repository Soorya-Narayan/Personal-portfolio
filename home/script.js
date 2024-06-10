// Array of different words to replace "Surya"
const words = ["Surya Narayanan","سوريا نارايانان", "സുര്യ നാരായണൻ​", "सूर्य नारायणन​", "సూర్య నారాయణన్​"];
let currentIndex = 0;
let currentLetterIndex = 0;
const spanElement = document.getElementById('dynamicWord');

function changeWord() {
  const currentWord = words[currentIndex];
  const nextWord = words[(currentIndex + 1) % words.length];

  // Build the new word letter by letter
  let newWord = '';
  for (let i = 0; i <= currentLetterIndex; i++) {
    newWord += currentWord[i];
  }

  // Update the text content of the span element
  spanElement.textContent = newWord;

  // Increment the letter index
  currentLetterIndex++;

  // Check if we've reached the end of the current word
  if (currentLetterIndex >= currentWord.length) {
    currentLetterIndex = 0;
    currentIndex = (currentIndex + 1) % words.length;
  }
}

// Call the changeWord function every 200 milliseconds
setInterval(changeWord, 200);

// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Get the contact button element
  var contactButton = document.querySelector('.hire__me');

  // Add click event listener to the contact button
  contactButton.addEventListener('click', function() {
    // Redirect the user to contact.html
    window.location.href = '../contact/contact.html';
  });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Get the contact button element
  var contactButton = document.querySelector('.hire__me');

  // Add click event listener to the contact button
  contactButton.addEventListener('click', function() {
    // Redirect the user to contact.html
    window.location.href = '../contact/contact.html';
  });

  // Get the theme toggle button element
  var themeToggleButton = document.getElementById('theme-toggle');

  // Add click event listener to the theme toggle button
  themeToggleButton.addEventListener('click', function() {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode');

    // Toggle the dark-mode class on the nav
    document.querySelector('nav').classList.toggle('dark-mode');

    // Toggle the dark-mode class on the section
    document.querySelector('.section').classList.toggle('dark-mode');

    // Change the icon based on the current mode
    if (document.body.classList.contains('dark-mode')) {
      themeToggleButton.innerHTML = '<i class="ri-moon-line"></i>';
    } else {
      themeToggleButton.innerHTML = '<i class="ri-sun-line"></i>';
    }
  });
});
