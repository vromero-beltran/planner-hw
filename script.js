/*var updateLocale = require('dayjs/plugin/updateLocale');
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  months: [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ],
  weekdays: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ],
  relativeTime: {
    d: "a day",
    dd: "%d days"
  }
}) 

function displayDate() {
  const weekday = dayjs().format('dddd');
  const month = dayjs().format('MMMM');
  const day = dayjs().format('D');
  const currentDate = `${weekday}, ${month} ${day}`;
  document.getElementById('currentDay').textContent = currentDate;
}
displayDate(); */

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't running until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("#saveBtn").click(function() {
    var timeBlockId = $(this).parent().attr("#saveBtn"); // Get ID of timeblock this button is in
    var userText = $(this).siblings(".description").val();// Get textarea input value
    localStorage.setItem(timeBlockId, userText); // Save to localStorage using timeblock ID as key
  });
  var currentTime = dayjs().format('HH:mm');
  console.log(currentTime)
  $('div').addclass('container-lg')
  $('div').addid('#hour-9')
  $('div').appendChild('<div>');
  $('div.div').appendTo('<div>9AM</div>')
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
