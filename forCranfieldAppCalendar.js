// let calendarObject = {
//   jan: {
//     first: {
//       track1: true,
//       track2: false,
//       track3: true,
//       track4: true
//     },
//     second: {},
//     third: {},
//     fourth: {},
//   },
//   feb: {},
//   march: {},
//   april: {},
// }


// THIS IS IT!! @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let classList = [
  {
    name: 'Shawn Ballay',
    track: 1,
    school: 'Turner Creek',
    dateOfBirth: {
      year: 1992,
      month: 3,
      day: 17
    },
  },
  {
    name: 'Dave Smith',
    track: 2,
    school: 'Turner Creek',
    dateOfBirth: {
      year: 2013,
      month: 11,
      day: 2
    },
  },
  {
    name: 'Josh Jenkins',
    track: 2,
    school: 'Weatherstone',
    dateOfBirth: {
      year: 2015,
      month: 2,
      day: 6
    },
  },
  {
    name: 'Chris Mansfield',
    track: 3,
    school: 'Salem',
    dateOfBirth: {
      year: 2018,
      month: 7,
      day: 19
    },
  },
]

// Gets students by school *****************************************************
let turnerCreekStudents = [];
classList.forEach((student) => {
  if (student.school === 'Turner Creek') {
    turnerCreekStudents.push(student);
  }
});
// console.log(turnerCreekStudents);

// Gets students by track ******************************************************
let trackOneStudents = [];
classList.forEach((student) => {
  if (student.track === 1) {
    trackOneStudents.push(student);
  }
});
// console.log(trackOneStudents)

// Gets students by track AND school *******************************************
let t1TurnerCreekStudents = [];
classList.forEach((student) => {
  if (student.school === 'Turner Creek' && student.track === 2) {
    t1TurnerCreekStudents.push(student.name);
  }
});
// console.log(t1TurnerCreekStudents);

// Calculate age of student ****************************************************
function calculateAge(birthYear, birthMonth, birthDay) {
  let todayDate = new Date();
  let todayYear = todayDate.getFullYear();
  let todayMonth = todayDate.getMonth();
  let todayDay = todayDate.getDate();
  age = todayYear - birthYear;

  if (todayMonth < (birthMonth - 1)) {
    age--;
  }
  if (((birthMonth - 1) == todayMonth) && (todayDay < birthDay)) {
    age--;
  }
  return age;
}


classList.forEach((student) => {
  let birthYear = student.dateOfBirth.year;
  let birthMonth = student.dateOfBirth.month;
  let birthDay = student.dateOfBirth.day;

  let age = calculateAge(birthYear, birthMonth, birthDay);
  console.log(`${student.name} is ${age} years old!`);
});
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@