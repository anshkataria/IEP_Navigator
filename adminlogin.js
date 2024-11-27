// Mock database for login validation
const mockDatabase = [
    { studentID: "admin", password: "admin" },
    { studentID: "student2", password: "pass456" },
    { studentID: "student3", password: "qwerty789" },
    { studentID: "himikasharma", password: "1234" }
];

// Function to validate credentials
function validateCredentials(studentID, password) {
    return mockDatabase.some(user => user.studentID === studentID && user.password === password);
}

// Event listener for the form submission
document.getElementById("admin-login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const studentID = document.getElementById("studentID").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginError = document.getElementById("loginError");

    if (validateCredentials(studentID, password)) {
        loginError.style.display = "none"; // Hide error message

        // Store user data in session storage for use on the dashboard
        sessionStorage.setItem("loggedInUser", JSON.stringify({ studentID }));

        // Redirect to the dashboard
        window.location.href = "admindashboard.html";
    } else {
        loginError.style.display = "block"; // Show error message
    }
});
