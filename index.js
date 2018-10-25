var table = 3;             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Mutiplication Table</h2>';              // Message
var table = prompt("Please enter number from 0-10" , " ")
if (operator === 'multiplication') {
  // Do addition

  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
