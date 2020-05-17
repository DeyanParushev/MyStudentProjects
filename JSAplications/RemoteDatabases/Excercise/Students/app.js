import { loadStudents } from './FirebaseRequests.js';
import { createStudent } from './FirebaseRequests.js';
import { deleteStudent } from './FirebaseRequests.js';

function createFillForm() {
    let form = document.createElement('tr');
    form.innerHTML =
        `<th>
    <label>Name</label>
    <input type="text" id="name" placeholder="Name..." required>
    </th>
    <th>
    <label>Last Name</label>
    <input type="text" id="lastName" placeholder="Last Name..." required>
    </th>
    <th>
    <label>Faculty Number</label>
    <input type="number" id="facultyNumber" placeholder="Faculty Number..." required>
    </th>
    <th>
    <label>Grade</label>
    <input type="number" id="grade" placeholder="Grade..." required>
    </th>
    <th>
    <button id='createStudent'>Create</button>
    <button id='loadStudents'>Load Students</button>
    </th>`;

    document.querySelector('thead').prepend(form);
};

createFillForm();

document.querySelector('#loadStudents').addEventListener('click', async() => {
    let students = await loadStudents();
    document.querySelector('tbody').innerHTML = '';
    clearForm();
    try {
        Array.from(Object.entries(students)).forEach(x => {
            let newStudentHTML = createHTMLElement(x[1]);
            newStudentHTML.id = x[0];
            document.querySelector('tbody').appendChild(newStudentHTML);
        });
        document.querySelector('#errorDiv').style.display = 'none';
    } catch {
        document.querySelector('#errorDiv').textContent = 'No entries to display';
        document.querySelector('#errorDiv').style.display = 'block';
    };
});

document.querySelector('#createStudent').addEventListener('click', async() => {
    let student = getDataFromForm();
    clearForm();

    if (verifyInput(student)) {
        let newStudentHTMLElement = createHTMLElement(student);
        document.querySelector('tbody').appendChild(newStudentHTMLElement);

        let databaseId = Object.values(await createStudent(student))[0];
        newStudentHTMLElement.id = databaseId;
        document.querySelector('#errorDiv').style.display = 'none';
    } else {
        document.querySelector('#errorDiv').textContent = 'Invalid input';
        document.querySelector('#errorDiv').style.display = 'block';
    }
});

function verifyInput(student) {
    if (student.firstName === null || student.firstName === '' || student.firstName === undefined) {
        return false;
    };

    if (student.lastName == null || student.lastName === '' || student.lastName === undefined) {
        return false;
    };

    if (typeof(student.facultyNumber) !== 'number' || student.facultyNumber <= 0) {
        return false;
    };

    if (student.grade < 2 || student.grade > 6) {
        return false;
    };

    let idList = Array.from(document.querySelectorAll('.id'));
    let facultyNumberList = Array.from(document.querySelectorAll('.facultyNumber'));

    if (idList.find(x => Number(x.textContent) === student.id) || facultyNumberList.find(y => Number(y.textContent) === student.facultyNumber)) {
        return false;
    };

    return true;
};

function createHTMLElement(student) {
    let newTableRow = document.createElement('tr');
    newTableRow.innerHTML = `<td class='id'>${student.id}</td>
    <td class='name'>${student.firstName}</td>
    <td class='lastName'>${student.lastName}</td>
    <td class='facultyNumber'>${student.facultyNumber}</td>
    <td class='grade'>${student.grade}</td>
    <td>
        <button>Delete</button>
    </td>`;

    newTableRow.querySelector('button').addEventListener('click', async() => {
        document.querySelector('tbody').removeChild(newTableRow);
        clearForm();
        await deleteStudent(newTableRow.id);
    });

    return newTableRow;
};

function getDataFromForm() {
    let student = {
        id: Array.from(document.querySelector('tbody').children).length + 1,
        firstName: document.querySelector('input#name').value,
        lastName: document.querySelector('input#lastName').value,
        facultyNumber: Number(document.querySelector('input#facultyNumber').value),
        grade: Number(document.querySelector('input#grade').value),
    };

    return student;
};

function clearForm() {
    document.querySelector('input#name').value = '';
    document.querySelector('input#lastName').value = '';
    document.querySelector('input#facultyNumber').value = '';
    document.querySelector('input#grade').value = '';
};
