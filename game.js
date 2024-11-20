const question = document. querySelector('#question') //returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors
const choices = Array.from(document.querySelectorAll('.choice-text')) //querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors, then array from creates an array from them.
const progressText = document. querySelector('#progressText')
const scoreText = document. querySelector('#score')
const progressBarFull = document. querySelector('#progressBarFull')