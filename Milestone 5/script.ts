document.addEventListener("DOMContentLoaded", () => {
    // Grabbing the required elements
    const form = document.getElementById("resume-form") as HTMLFormElement | null;
    const resumeSection = document.getElementById("resume-section") as HTMLElement | null;
    const resumeContainer = document.getElementById("resume") as HTMLElement | null;
    const shareableLink = document.getElementById("shareable-link") as HTMLInputElement | null;
    const copyLinkBtn = document.getElementById("copy-link-btn") as HTMLButtonElement | null;
    const downloadPdfBtn = document.getElementById("download-pdf-btn") as HTMLButtonElement | null;

    if (!form || !resumeSection || !resumeContainer || !shareableLink || !copyLinkBtn || !downloadPdfBtn) {
        console.error("One or more required elements are missing in the DOM.");
        return;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect form data
        const username = (document.getElementById("username") as HTMLInputElement)?.value.trim();
        const name = (document.getElementById("name") as HTMLInputElement)?.value.trim();
        const email = (document.getElementById("email") as HTMLInputElement)?.value.trim();
        const phone = (document.getElementById("phone") as HTMLInputElement)?.value.trim();
        const education = (document.getElementById("education") as HTMLTextAreaElement)?.value.trim();
        const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value.trim();
        const skills = (document.getElementById("skills") as HTMLInputElement)?.value.trim();

        if (!username || !name || !email || !phone || !education || !experience || !skills) {
            alert("Please fill in all fields.");
            return;
        }

        // Populate resume content
        resumeContainer.innerHTML = `
            <h3>Personal Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Work Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;

        // Generate shareable link
        const uniqueUrl = `${window.location.origin}/resume/${encodeURIComponent(username)}`;
        shareableLink.value = uniqueUrl;

        // Show resume section
        resumeSection.style.display = "block";
    });

    // Copy link functionality
    copyLinkBtn.addEventListener("click", () => {
        shareableLink.select();
        navigator.clipboard.writeText(shareableLink.value).then(() => {
            alert("Link copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy the link.");
        });
    });

    // Download PDF functionality
    downloadPdfBtn.addEventListener("click", () => {
        import("jspdf").then(({ jsPDF }) => {
            const pdf = new jsPDF();
            pdf.html(resumeContainer, {
                callback: (doc) => {
                    doc.save("resume.pdf");
                }
            });
        }).catch((err) => {
            console.error("Failed to load jsPDF:", err);
        });
    });
});
