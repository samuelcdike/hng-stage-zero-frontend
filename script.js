// Update current time in milliseconds
function updateTime() {
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = Date.now();
}

// Initial update
updateTime();

// Update every 100ms for real-time display
setInterval(updateTime, 100);