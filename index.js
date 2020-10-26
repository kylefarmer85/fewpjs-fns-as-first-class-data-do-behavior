/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let splitTime = time.split(":");
  let joinTime = splitTime.join('')
  let newTime = parseInt(joinTime);
  if (newTime < 1200) {
    return "Good Morning";
  } else if (newTime >= 1200 && newTime <= 1700) {
    return "Good Afternoon";
  } else {
    return "Good Evening"
  }
}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}
