/*
    This program displays a digital clock in HTML
*/

function displayTime() {

    // Get time elements from Date object
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours > 12 ? hours -= 12 : hours;

    // Set HTML element to display formatted clock
    timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

// Call function immediately on startup, call it again every second
displayTime();
setInterval(displayTime, 1000);
