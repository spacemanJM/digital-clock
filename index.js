/*
    This program displays a digital clock in HTML
*/

// Get HTML elements
const hourLabel = document.getElementById("hourLabel");
const minuteLabel = document.getElementById("minuteLabel");
const secondLabel = document.getElementById("secondLabel");

function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hours > 12 ? hourLabel.textContent = hours - 12: hourLabel.textContent = hours;
    minuteLabel.textContent = `: ${minutes} :`;
    secondLabel.textContent = ` ${seconds}`;
}

const updateTime = setInterval(displayTime, 1000);
