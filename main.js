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

function showDashboard() {
  document.getElementById("auth-section").style.display = "none";
  document.getElementById("dashboard-section").style.display = "block";
}

function logout() {
  document.getElementById("dashboard-section").style.display = "none";
  document.getElementById("auth-section").style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
  showForm("login"); // Show login form by default
});
