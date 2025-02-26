const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

let laClasse = []
for(let i = 0; i < students.length; i++){
  const thisStudent = students[0]
  if (thisStudent.name === 'Marco Lanci'){
    laClasse += thisStudent.class
    break
  }
}
console.log(laClasse);



const laSuaClasse = students.find((studente) =>{
  return studente.name === 'Marco Lanci'
})
console.log(laSuaClasse.class);
