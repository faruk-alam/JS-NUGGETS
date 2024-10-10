let students = ["harris","nicco","yousuf","lama"]
let UpperCaseName = students.map(upperNames)
console.log(UpperCaseName)
let LowerCaseName = students.map(lowerNames)
console.log(LowerCaseName)
let capitalizeName = students.map(capitalizeNames)
console.log(capitalizeName)

function upperNames(student) {
    return student.toUpperCase()
}

function lowerNames(student) {
    return student.toLowerCase()
}

function capitalizeNames(student) {
    return student.charAt(0).toUpperCase() + student.slice(1)
}
let  dates = ["2020-01-10","2021-02-20","2023-03-30"];
let formatedates = dates.map(formatDate)
console.log(formatedates)
function formatDate(date) {
    let parts = date.split("-")
    return `${parts[2]}/${parts[1]}/${parts[0]}`
}


const people = [
    {
        name : "alex",
        age : 34,
        profession : "teacher",
    },
    {
        name : "sonia",
        age : 25,
        profession : "Nurse",
    },
    {
        name : "Rob",
        age : 40,
        profession : "Doctor",
    },
    {
        name : "usman",
        age : 46,
        profession : "clener",
    },

    {
        name : "annie",
        age : 26,
        profession : "designer",
    },
]
const ages = people.map((person) => {
  //console.log(person)
  return person.age;
})
console.log(ages)
//adding 2 years for  all person
const getAges = person => person.age + 2;
const newAges = people.map(getAges);
console.log(newAges)

const newpeople = people.map((newPerson)=>{
    return{
        Newnames : newPerson.name.toUpperCase(),
        oldAges : newPerson.age * 2,
    }
})
console.log(newpeople)

const showScreen = document.querySelector(".showScreen")
const name = people.map((person) =>{
    return `<h3> ${person.name} </h3>`
})
console.log(name)
showScreen.innerHTML = name;