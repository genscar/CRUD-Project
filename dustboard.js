const enrollmentForm = document.getElementById('enrollmentForm');
const studentTableBody = document.querySelector('tbody');

let students = JSON.parse(localStorage.getItem('students')) || [];
let editIndex = null; 

function renderStudents() {
    studentTableBody.innerHTML = '';
    students.forEach((student, index) => {
        const row = `
            <tr class="border-b">
                <td class="py-2 px-4">${student.name}</td>
                <td class="py-2 px-4">${student.email}</td>
                <td class="py-2 px-4">${student.phone}</td>
                <td class="py-2 px-4">${student.course}</td>
                <td class="py-2 px-4">${student.gender}</td>  <!-- New data -->
                <td class="py-2 px-4">${student.yearLevel}</td>  <!-- New data -->
                <td class="py-2 px-4">
                   <a href="#enroll"> <button class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" onclick="setEdit(${index})">Edit</button></a> 
                    <a href="#enroll"> <button class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2" onclick="deleteStudent(${index})">Delete</button></a> 
                </td>
            </tr>
        `;
        studentTableBody.insertAdjacentHTML('beforeend', row);
    });
}

function setEdit(index) {
    const student = students[index];
    editIndex = index; 
    enrollmentForm.name.value = student.name;
    enrollmentForm.email.value = student.email;
    enrollmentForm.phone.value = student.phone;
    enrollmentForm.dateOfBirth.value = student.dateOfBirth;
    enrollmentForm.course.value = student.course;
    enrollmentForm.gender.value = student.gender; 
    enrollmentForm.yearLevel.value = student.yearLevel; 
}

enrollmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    for (let i = 0; i < enrollmentForm.length - 1; i++) {
        if (!enrollmentForm[i].value) {
            alert("Please fill in all fields.");
            return;
        }
    }

    const newStudent = {
        name: enrollmentForm.name.value,
        email: enrollmentForm.email.value,
        phone: enrollmentForm.phone.value,
        dateOfBirth: enrollmentForm.dateOfBirth.value,
        course: enrollmentForm.course.value,
        gender: enrollmentForm.gender.value,  
        yearLevel: enrollmentForm.yearLevel.value,  
    };

    if (editIndex !== null) {
        students[editIndex] = newStudent;
        alert("Student updated successfully!");
        editIndex = null; 
    } else {
        students.push(newStudent);
        alert("Student added successfully!");
    }

    localStorage.setItem('students', JSON.stringify(students)); 
    enrollmentForm.reset();
    renderStudents();
});

function deleteStudent(index) {
    students.splice(index, 1); 
    localStorage.setItem('students', JSON.stringify(students)); 
    renderStudents();
}


renderStudents();
