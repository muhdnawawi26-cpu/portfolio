function displayGreeting() {
    var greetingP = document.getElementById("greeting-text");
    greetingP.innerHTML = "Hello! Thank you for reviewing my UNIMAS portfolio.";
}

function toggleProjectList() {
    var pList = document.getElementById("project-list-div");
    if (pList.style.display === "none") {
        pList.style.display = "block";
    } else {
        pList.style.display = "none";
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