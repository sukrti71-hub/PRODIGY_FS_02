function login() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  if (username === "admin" && password === "admin123") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Username or Password");
  }
}

let employees = [];

function showAddForm() {
  document.getElementById("content").innerHTML = `
    <h2>Add Employee</h2>

    <input id="empName" placeholder="Employee Name">
    <input id="empEmail" placeholder="Email">
    <input id="empPhone" placeholder="Phone">
    <input id="empDept" placeholder="Department">
    <input id="empRole" placeholder="Role">
    <input id="empSalary" placeholder="Salary">

    <button onclick="addEmployee()">Save Employee</button>
  `;
}

function addEmployee() {
  let name = document.getElementById("empName").value.trim();
  let email = document.getElementById("empEmail").value.trim();
  let phone = document.getElementById("empPhone").value.trim();
  let dept = document.getElementById("empDept").value.trim();
  let role = document.getElementById("empRole").value.trim();
  let salary = document.getElementById("empSalary").value.trim();

  if (!name || !email || !phone || !dept || !role || !salary) {
    alert("Please fill all fields");
    return;
  }

  employees.push({ name, email, phone, dept, role, salary });

  alert("Employee added successfully");
  showEmployees();
}

function showEmployees() {
  let content = document.getElementById("content");

  if (employees.length === 0) {
    content.innerHTML = "<h2>No employees added yet</h2>";
    return;
  }

  content.innerHTML = "<h2>Employee List</h2>";

  employees.forEach((emp, index) => {
    content.innerHTML += `
      <div class="emp-card">
        <p><b>Name:</b> ${emp.name}</p>
        <p><b>Email:</b> ${emp.email}</p>
        <p><b>Phone:</b> ${emp.phone}</p>
        <p><b>Department:</b> ${emp.dept}</p>
        <p><b>Role:</b> ${emp.role}</p>
        <p><b>Salary:</b> ₹${emp.salary}</p>

        <button class="edit-btn" onclick="editEmployee(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteEmployee(index) {
  employees.splice(index, 1);
  alert("Employee deleted successfully");
  showEmployees();
}

function editEmployee(index) {
  let emp = employees[index];

  document.getElementById("content").innerHTML = `
    <h2>Edit Employee</h2>

    <input id="empName" value="${emp.name}">
    <input id="empEmail" value="${emp.email}">
    <input id="empPhone" value="${emp.phone}">
    <input id="empDept" value="${emp.dept}">
    <input id="empRole" value="${emp.role}">
    <input id="empSalary" value="${emp.salary}">

    <button onclick="updateEmployee(${index})">Update Employee</button>
  `;
}

function updateEmployee(index) {
  employees[index] = {
    name: document.getElementById("empName").value.trim(),
    email: document.getElementById("empEmail").value.trim(),
    phone: document.getElementById("empPhone").value.trim(),
    dept: document.getElementById("empDept").value.trim(),
    role: document.getElementById("empRole").value.trim(),
    salary: document.getElementById("empSalary").value.trim(),
  };

  alert("Employee updated successfully");
  showEmployees();
}