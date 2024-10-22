// Gabungan main.js dan script.js

// Fungsi untuk menampilkan form login atau signup
function showForm(formType) {
  if (formType === "login") {
    document.querySelector(".login-form").style.display = "block";
    document.querySelector(".signup-form").style.display = "none";
    document.querySelector(".login-link").classList.add("active");
    document.querySelector(".signup-link").classList.remove("active");
  } else {
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".signup-form").style.display = "block";
    document.querySelector(".login-link").classList.remove("active");
    document.querySelector(".signup-link").classList.add("active");
  }
}

// Fungsi login dengan validasi sederhana
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validasi sederhana
  if (email === "test@example.com" && password === "password123") {
    // Pengalihan ke halaman dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Email atau password salah, coba lagi!");
  }
}

// Fungsi logout yang mengarahkan ke login.html
function logout() {
  window.location.href = "login.html"; // Pengalihan ke login.html saat logout
}

// Event Listener untuk memastikan form login ditampilkan secara default
document.addEventListener("DOMContentLoaded", () => {
  showForm("login"); // Tampilkan form login secara default
});

// Toggle dropdown visibility on user-info click
document.getElementById("user-info").addEventListener("click", function () {
  this.classList.toggle("active"); // Toggle active class to show/hide the dropdown
});

// Optional: Close the dropdown if clicked outside
window.addEventListener("click", function (event) {
  const userInfo = document.getElementById("user-info");
  const dropdown = document.getElementById("dropdown-menu");

  if (!userInfo.contains(event.target)) {
    userInfo.classList.remove("active"); // Hide dropdown if clicked outside
  }
});

// Function to show the content in Section 2 based on the menu clicked in Section 1
function showContent(sectionId) {
  // Hide all content sections
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => (section.style.display = "none"));

  // Show the selected content section
  const selectedSection = document.getElementById("content-" + sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block";
  }
}
