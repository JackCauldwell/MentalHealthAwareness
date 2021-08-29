// Array store all health tips
var tips = [
  'Maintain a healthy diet.',
  'Consume less salt and sugar.',
  'Reduce intake of harmful fats.',
  'Avoid harmful use of alcohol.',
  'Dont smoke.',
  'Check your blood pressure regularly.',
  'Get vaccinated.',
  'Get tested.',
  'Cover your mouth when coughing or sneezing.',
  'Get plenty of sleep.',
  'Take a break.',
  'Drink only safe water.',
  'Talk to someone you trust if you are feeling down.',
  'Go for a walk.',
  'Clean your hands properly.',
  'Prepare your food correctly.',
  'Have regular check-ups.',
  'Do not support Tottenham Hotspur.'
];

// This function will be invoked to display random new tip from the array
function randomTip() {
  // Generating random number with in the size of array
  var randomNum = Math.floor(Math.random() * tips.length);

  // Displaying the random tip to HTML
  document.getElementById('diplayTip').innerHTML = tips[randomNum];
}

// Clears the form data whenever user press submit button
document.addEventListener('submit', function (event) {
  event.preventDefault();
  event.target.reset();
});
