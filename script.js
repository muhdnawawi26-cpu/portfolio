function displayGreeting() {
    var greetingP = document.getElementById("greeting-text");
    greetingP.innerHTML = "Hello! Thank you for reviewing my portfolio.";
}

function toggleProjectList() {
    var pList = document.getElementById("project-list-div");
    if (pList.style.display === "none") {
        pList.style.display = "block";
    } else {
        pList.style.display = "none";
    }
}

/* Function to show clicked section and hide others */
function showSection(sectionId) {
    var sections = document.getElementsByClassName("page-section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove("active-section");
        sections[i].classList.add("hidden-section");
    }
    var targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove("hidden-section");
        targetSection.classList.add("active-section");
    }
}

/* Light / Dark Mode Toggle Function */
function toggleTheme() {
    var bodyTag = document.body;
    var themeBtn = document.getElementById("theme-toggle-btn");

    if (bodyTag.classList.contains("light-mode")) {
        bodyTag.classList.remove("light-mode");
        bodyTag.classList.add("dark-mode");
        themeBtn.innerHTML = "Light Mode";
    } else {
        bodyTag.classList.remove("dark-mode");
        bodyTag.classList.add("light-mode");
        themeBtn.innerHTML = "Dark Mode";
    }
}

function validateForm() {
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("form-feedback");

    try {
        if (fname == "") {
            throw "First name field cannot be empty.";
        }
        if (email == "") {
            throw "Email field cannot be empty.";
        }
        if (email.indexOf("@") == -1) {
            throw "Invalid email address (missing @ symbol).";
        }

        feedback.style.color = "green";
        feedback.innerHTML = "Success! Message prepared for submission.";
    } 
    catch(err) {
        feedback.style.color = "red";
        feedback.innerHTML = "Error: " + err;
    }
    finally {
        console.log("Validation check completed.");
    }
}