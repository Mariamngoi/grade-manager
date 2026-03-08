let students = [
  { name: "Mariam", score: 85, grade: "A" },
  { name: "John", score: 70, grade: "C" },
];
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
function addGrade() {
  const name = document.getElementById("studentName").value;
  const score = document.getElementById("score").value;
  const grade = getGrade(score);

  const student = {
    name: name,
    score: score,
    grade: grade,
  };

  students.push(student);

  displayStudents();
  document.getElementById("studentName").value = "";
  document.getElementById("score").value = "";
}
function displayStudents() {
  const table = document.getElementById("gradeTable");

  table.innerHTML = "";

  students.forEach((student, index) => {
    const row = `
<tr>
<td>${student.name}</td>
<td>${student.score}</td>
<td>${student.grade}</td>
<td>
<button onclick="deleteStudent(${index})">Delete</button>
</td>
</tr>
`;

    table.innerHTML += row;
  });
}
function deleteStudent(index) {
  students.splice(index, 1);

  displayStudents();
}
