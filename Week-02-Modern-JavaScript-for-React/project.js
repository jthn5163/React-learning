const students = [
  { id: 1, name: "Aarav Sharma", mark: 92, stream: "Science" },
  { id: 2, name: "Diya Nair", mark: 76, stream: "Commerce" },
  { id: 3, name: "Kavya Patel", mark: 88, stream: "Science" },
  { id: 4, name: "Mohammed Zayd", mark: 64, stream: "Humanities" },
  { id: 5, name: "Rithvik Sen", mark: 95, stream: "Science" }
];

let count = 1;

const distinctionStudents = students.filter(student=> student.mark >=80);
// console.log(distinctionStudents);

const certificates = distinctionStudents.map(({name,mark,stream})=>{
  return `${count++}
  **************************
  CENTRE FOR EXCELLENCE
  **************************

  This is to certify that ${name}
  has achieved an outstanding score of ${mark}% in ${stream}.

  Signature: Principal
  `
});

certificates.forEach(cert=> console.log(cert));