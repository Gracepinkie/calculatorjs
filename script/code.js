let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
 // current clicked buttons value 
  let clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    if (display.value !== '') {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {
 // clear everything on display
    display.value = '';
  } else {
    display.value += clickedButtonValue;
  }
}