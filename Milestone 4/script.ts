document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const resumeSection = document.getElementById("resume-section") as HTMLElement;
    const resumeContainer = document.getElementById("resume") as HTMLElement;

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent form submission from refreshing the page

        // Collect form values
        const name = (document.getElementById("name") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
        const education = (document.getElementById("education") as HTMLTextAreaElement).value.trim();
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value.trim();
        const skills = (document.getElementById("skills") as HTMLInputElement).value.trim();

        // Validate input (basic validation)
        if (!name || !email || !phone || !education || !experience || !skills) {
            alert("All fields are required. Please fill out all fields.");
            return;
        }

        // Populate resume section dynamically
        resumeContainer.innerHTML = `
            <div class="resume-item" contenteditable="true">
                <h3>Personal Information</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
            </div>
            <div class="resume-item" contenteditable="true">
                <h3>Education</h3>
                <p>${education}</p>
            </div>
            <div class="resume-item" contenteditable="true">
                <h3>Work Experience</h3>
                <p>${experience}</p>
            </div>
            <div class="resume-item" contenteditable="true">
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        `;

        // Show the resume section
        resumeSection.style.display = "block";
    });
});
