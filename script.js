// Set dynamic greeting based on time of day
function setGreeting() {
    const hour = new Date().getHours();
    let greeting = "Good evening";
    
    if (hour >= 5 && hour < 12) {
        greeting = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greeting = "Good afternoon";
    }
    
    const titleElement = document.getElementById("greeting-title");
    if (titleElement) {
        titleElement.innerHTML = `${greeting}, I'm Muhammad Nawawi`;
    }
}

// Light / Dark Mode Toggle Logic
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById("theme-toggle");
    
    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        themeBtn.innerText = "Dark mode";
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        themeBtn.innerText = "Light mode";
    }
}

// Initialize scripts when page loads
window.onload = function() {
    setGreeting();
};