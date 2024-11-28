document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeSection = document.getElementById("resume-section");
    var resumeContainer = document.getElementById("resume");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        
        // Prevent form submission from refreshing the page
        // Collect form values

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var education = document.getElementById("education").value.trim();
        var experience = document.getElementById("experience").value.trim();
        var skills = document.getElementById("skills").value.trim();

        // Validate input (basic validation)

        if (!name || !email || !phone || !education || !experience || !skills) {
            alert("All fields are required. Please fill out all fields.");
            return;
        }

        // Populate resume section dynamically

        resumeContainer.innerHTML = "\n            <div class=\"resume-item\" contenteditable=\"true\">\n                <h3>Personal Information</h3>\n                <p><strong>Name:</strong> ".concat(name, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(phone, "</p>\n            </div>\n            <div class=\"resume-item\" contenteditable=\"true\">\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n            </div>\n            <div class=\"resume-item\" contenteditable=\"true\">\n                <h3>Work Experience</h3>\n                <p>").concat(experience, "</p>\n            </div>\n            <div class=\"resume-item\" contenteditable=\"true\">\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        ");
        
        // Show the resume section
        
        resumeSection.style.display = "block";
    });
});
