// TypeScript code in script.ts
// Select form and resume elements
var form = document.getElementById('resumeForm');
var resumeContainer = document.getElementById('resume');
// Form submission handler
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from refreshing the page
    // Capture user input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var institution = document.getElementById('institution').value;
    var graduationYear = document.getElementById('graduationYear').value;
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var responsibilities = document.getElementById('responsibilities').value;
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    // Generate resume HTML content dynamically
    resumeContainer.innerHTML = "\n        <h3>".concat(name, "</h3>\n        <p>Email: ").concat(email, "</p>\n        <p>Phone: ").concat(phone, "</p>\n        \n        <h4>Education</h4>\n        <p>").concat(education, " - ").concat(institution, ", ").concat(graduationYear, "</p>\n        \n        <h4>Work Experience</h4>\n        <p><strong>").concat(jobTitle, "</strong> at ").concat(company, "</p>\n        <p>").concat(responsibilities, "</p>\n        \n        <h4>Skills</h4>\n        <ul>\n            ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n        </ul>\n    ");
});
