import "./style.css";

// Initialize any custom JavaScript functionality here
document.addEventListener("DOMContentLoaded", () => {
  // Example: Form submission handling
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      console.log("Form submitted:", Object.fromEntries(formData));
      // Here you would typically send the data to your backend
    });
  }
});
