// Function to toggle project details visibility
function showProjectDetails(id) {
    const details = document.getElementById(`${id}-details`);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

// Form submission alert (example)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Thank you for reaching out! I'll get back to you soon.");
            form.reset();
        });
    }
});
