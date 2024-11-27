// Sample course data
let courses = [
    { id: 'C001', name: 'Computer Science 101', instructor: 'Dr. Smith' },
    { id: 'C002', name: 'Mathematics 101', instructor: 'Prof. Johnson' },
];

// Function to render the course list
function renderCourseList() {
    const courseTableBody = document.querySelector("#course-table tbody");
    courseTableBody.innerHTML = ''; // Clear existing rows

    courses.forEach(course => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.id}</td>
            <td>${course.name}</td>
            <td>${course.instructor}</td>
            <td>
                <button onclick="openEditCourseModal('${course.id}')">Edit</button>
                <button onclick="deleteCourse('${course.id}')">Delete</button>
            </td>
        `;
        courseTableBody.appendChild(row);
    });
}

// Function to open Add Course modal
function openAddCourseModal() {
    document.getElementById("course-modal").style.display = 'block';
    document.getElementById("modal-title").textContent = "Add New Course";
    document.getElementById("course-form").reset();
    document.getElementById("course-id").disabled = false;
}

// Function to open Edit Course modal
function openEditCourseModal(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        document.getElementById("course-id").value = course.id;
        document.getElementById("course-name").value = course.name;
        document.getElementById("course-instructor").value = course.instructor;
        document.getElementById("course-id").disabled = true;
        document.getElementById("course-modal").style.display = 'block';
        document.getElementById("modal-title").textContent = "Edit Course";
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("course-modal").style.display = 'none';
}

// Function to handle form submission (Add/Edit)
document.getElementById("course-form").addEventListener('submit', function (event) {
    event.preventDefault();
    
    const courseId = document.getElementById("course-id").value;
    const courseName = document.getElementById("course-name").value;
    const courseInstructor = document.getElementById("course-instructor").value;

    const existingCourse = courses.find(c => c.id === courseId);

    if (existingCourse) {
        // Update course details
        existingCourse.name = courseName;
        existingCourse.instructor = courseInstructor;
    } else {
        // Add new course
        courses.push({ id: courseId, name: courseName, instructor: courseInstructor });
    }

    closeModal();
    renderCourseList();
});

// Function to delete a course
function deleteCourse(courseId) {
    courses = courses.filter(c => c.id !== courseId);
    renderCourseList();
}

// Initialize course list
renderCourseList();
