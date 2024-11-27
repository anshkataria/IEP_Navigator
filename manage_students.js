// Sample student data
let students = [
    { id: 'S001', name: 'John Doe', email: 'john.doe@example.com' },
    { id: 'S002', name: 'Jane Smith', email: 'jane.smith@example.com' },
];

// Function to render the student list
function renderStudentList() {
    const studentTableBody = document.querySelector("#student-table tbody");
    studentTableBody.innerHTML = ''; // Clear existing rows

    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>
                <button onclick="openEditStudentModal('${student.id}')">Edit</button>
                <button onclick="deleteStudent('${student.id}')">Delete</button>
            </td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Function to open Add Student modal
function openAddStudentModal() {
    document.getElementById("student-modal").style.display = 'block';
    document.getElementById("modal-title").textContent = "Add New Student";
    document.getElementById("student-form").reset();
    document.getElementById("student-id").disabled = false;
}

// Function to open Edit Student modal
function openEditStudentModal(studentId) {
    const student = students.find(s => s.id === studentId);
    if (student) {
        document.getElementById("student-id").value = student.id;
        document.getElementById("student-name").value = student.name;
        document.getElementById("student-email").value = student.email;
        document.getElementById("student-id").disabled = true;
        document.getElementById("student-modal").style.display = 'block';
        document.getElementById("modal-title").textContent = "Edit Student";
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("student-modal").style.display = 'none';
}

// Function to handle form submission (Add/Edit)
document.getElementById("student-form").addEventListener('submit', function (event) {
    event.preventDefault();
    
    const studentId = document.getElementById("student-id").value;
    const studentName = document.getElementById("student-name").value;
    const studentEmail = document.getElementById("student-email").value;

    const existingStudent = students.find(s => s.id === studentId);

    if (existingStudent) {
        // Update student details
        existingStudent.name = studentName;
        existingStudent.email = studentEmail;
    } else {
        // Add new student
        students.push({ id: studentId, name: studentName, email: studentEmail });
    }

    closeModal();
    renderStudentList();
});

// Function to delete a student
function deleteStudent(studentId) {
    students = students.filter(s => s.id !== studentId);
    renderStudentList();
}

// Initialize student list
renderStudentList();
