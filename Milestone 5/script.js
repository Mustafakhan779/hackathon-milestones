document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var resumeSection = document.getElementById("resume-section");
    var resumeContainer = document.getElementById("resume");
    var shareableLink = document.getElementById("shareable-link");
    var copyLinkBtn = document.getElementById("copy-link-btn");
    var downloadPdfBtn = document.getElementById("download-pdf-btn");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        // Collect form data
        var username = document.getElementById("username").value.trim();
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var education = document.getElementById("education").value.trim();
        var experience = document.getElementById("experience").value.trim();
        var skills = document.getElementById("skills").value.trim();
        if (!username || !name || !email || !phone || !education || !experience || !skills) {
            alert("Please fill in all fields.");
            return;
        }
        // Populate resume content
        resumeContainer.innerHTML = "\n            <h3>Personal Information</h3>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone:</strong> ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Work Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        // Generate shareable link
        var uniqueUrl = "".concat(window.location.origin, "/resume/").concat(encodeURIComponent(username));
        shareableLink.value = uniqueUrl;
        // Show resume section
        resumeSection.style.display = "block";
    });
    // Copy link functionality
    copyLinkBtn.addEventListener("click", function () {
        shareableLink.select();
        document.execCommand("copy");
        alert("Link copied to clipboard!");
    });
    // Download PDF functionality
    downloadPdfBtn.addEventListener("click", function () {
        var jsPDF = window.js.jsPDF, pdf;
        var pdf = new jsPDF();
        pdf.html(resumeContainer, {
            callback: function (doc) {
                doc.save("resume.pdf");
            }
        });
    });
});
