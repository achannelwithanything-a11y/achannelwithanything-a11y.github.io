// Example small script: show a motivational message
function showMotivation() {
  const messages = [
    "You’re doing great!",
    "Remember to take a break 😊",
    "Talking helps more than you think!",
    "Be kind to yourself today!"
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}
