// script.js
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Get the input value
      const userInput = event.target.value.toLowerCase();
      
      // Check if the input is 'about us'
      if (userInput === "about us") {
        // Scroll to the About section
        document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  