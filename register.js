// Event listener for the registration form submission
document.getElementById("student-register-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const newStudentID = document.getElementById("newStudentID").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();
    const registerSuccess = document.getElementById("registerSuccess");
    const registerError = document.getElementById("registerError");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the Student ID is already taken
    if (users.some(user => user.studentID === newStudentID)) {
        registerError.style.display = "block"; // Show error message
        registerSuccess.style.display = "none";
    } else {
        // Add the new user to the database
        users.push({ studentID: newStudentID, password: newPassword });
        localStorage.setItem("users", JSON.stringify(users));

        registerError.style.display = "none";
        registerSuccess.style.display = "block"; // Show success message

        // Clear the form fields
        document.getElementById("newStudentID").value = "";
        document.getElementById("newPassword").value = "";
    }
});
