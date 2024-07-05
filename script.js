function updateTimeAndDay() {
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('currentTime').textContent = currentTime;
    document.getElementById('currentDay').textContent = currentDay;
}

updateTimeAndDay(); // Call once on page load
setInterval(updateTimeAndDay, 1000);
