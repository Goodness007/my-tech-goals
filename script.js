function updateTime() {
    const currentTimeUTC = new Date().toUTCString().split(" ")[4];
    const currentDay = new Date().toUTCString().split(",")[0];
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = currentTimeUTC;
    document.querySelector('[data-testid="currentDay"]').innerText = currentDay;
}

window.onload = function() {
    updateTime();
    setInterval(updateTime, 1000);
};
