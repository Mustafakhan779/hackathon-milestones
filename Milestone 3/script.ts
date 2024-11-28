// TypeScript code in script.ts

// Select form and resume elements
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContainer = document.getElementById('resume') as HTMLElement;

// Form submission handler
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from refreshing the page

    // Capture user input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const institution = (document.getElementById('institution') as HTMLInputElement).value;
    const graduationYear = (document.getElementById('graduationYear') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const responsibilities = (document.getElementById('responsibilities') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());

    // Generate resume HTML content dynamically
    resumeContainer.innerHTML = `
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        
        <h4>Education</h4>
        <p>${education} - ${institution}, ${graduationYear}</p>
        
        <h4>Work Experience</h4>
        <p><strong>${jobTitle}</strong> at ${company}</p>
        <p>${responsibilities}</p>
        
        <h4>Skills</h4>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
    `;
});
