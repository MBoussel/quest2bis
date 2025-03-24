
// PART 3
// Modify the previous message checking that if an instructor also knows about Python, the message needs to be:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop

const instructors = [
  {
    name: 'John',
    availability: 'all',
    specialities: ['Javascript', 'Python', 'C++']
  },
  {
    name: 'Mary',
    availability: 'weekend',
    specialities: ['Javascript', 'Ruby', 'C++']
  },
  {
    name: 'Chris',
    availability: 'evenings',
    specialities: ['Javascript']
  },
  {
    name: 'Anthony',
    availability: 'all',
    specialities: ['Python', 'Ruby']
  },
  {
    name: 'Pauline',
    availability: 'only Mondays',
    specialities: ['Javascript', 'Html', 'CSS']
  },
  {
    name: 'Mark',
    availability: 'all',
    specialities: ['C#', 'C++', 'Javascript']
  },
  {
    name: 'Helen',
    availability: 'evenings',
    specialities: ['Python', 'C++']
  },
  {
    name: 'Charles',
    availability: 'none',
    specialities: ['Python']
  }
];

const disponibleWkend = instructors.filter(instructor => instructor.specialities.includes("Javascript") && (instructor.availability === "all" || instructor.availability === "weekend"));
console.log(disponibleWkend);
disponibleWkend.forEach(instructors => {console.log("Hi nameOfInstructor, we inform you that this weekend you will be doing the support class")};
const disponibleWkend = instructors.filter(instructor => instructor.specialities.includes("Javascript") && (instructor.availability === "all" || instructor.availability === "weekend"));
console.log(disponibleWkend);
disponibleWkend.forEach(instructors => {console.log(`Hi ${instructors.name}, we inform you that this weekend you will be doing the support class`);});


