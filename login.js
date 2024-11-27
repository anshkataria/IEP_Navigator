// Mock database
const mockDatabase = [
    { studentID: "student1", password: "password123" },
    { studentID: "student2", password: "pass456" },
    { studentID: "student3", password: "qwerty789" }
];

// Initialize localStorage with mockDatabase if not already present
if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(mockDatabase));
}

// Function to validate credentials
function validateCredentials(studentID, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.studentID === studentID && user.password === password);
}

// Event listener for the login form submission
document.getElementById("student-login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const studentID = document.getElementById("studentID").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginError = document.getElementById("loginError");

    if (validateCredentials(studentID, password)) {
        loginError.style.display = "none"; // Hide error message

        // Store user data in session storage
        sessionStorage.setItem("loggedInUser", JSON.stringify({ studentID }));

        // Redirect to the dashboard
        window.location.href = "student_dashboard.html";
    } else {
        loginError.style.display = "block"; // Show error message
    }
});
