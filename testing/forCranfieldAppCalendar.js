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

// Cranfield WebApp logic!!

// THIS IS IT But should do first and last name separate!! @@@@@@@@@@@@@@@@@@@@@
let classList = [
  {
    // Should do first and last name separate
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

// Testing objects
let masterStats = {
  shawn: {
    2016:
    {
      pft: 1409.38,
      pfa: 123.32,
      wins: 12,
      losses: 2
    },
    2017:
    {
      pft: 1449.38,
      pfa: 127.52,
      wins: 11,
      losses: 3
    },
  },
  steve: {
    2016:
    {
      pft: 1409.38,
      pfa: 123.32,
      wins: 15,
      losses: 0
    },
    2017:
    {
      pft: 1449.38,
      pfa: 127.52,
      wins: 7,
      losses: 8
    },
    2018:
    {
      pft: 1449.38,
      pfa: 127.52,
      wins: 9,
      losses: 6
    },
    2019:
    {
      pft: 1449.38,
      pfa: 127.52,
      wins: 5,
      losses: 10
    },
  },
}

// CURRENT YEAR FUNCTION
function calculateCYstats(owner) {

}

// ALL TIME FUNCTION (THIS WORKS)
function calculateATstats(owner) {
  // Function Global
  let yearsActiveList = [2016, 2017, 2018, 2019];
  // The above list must be pulled from somewhere else. Each owner will have their own list to accommodate for years they were not active. Another example might look like this;;; let yearsActiveList = [2016, 2018, 2019]
  
  let totalWins = 0;
  let totalLosses = 0;
  let totalTies = 0;
  let totalPointsFor = 0;

  // Function Logic
  yearsActiveList.forEach((year) => {
    totalWins += owner[year].wins;
    totalLosses += owner[year].losses;
    totalPointsFor += owner[year].pft
    // etc etc...
  });

  // Avg Points per year
  let AvgPointsFor = (totalPointsFor / yearsList.length);
  let winPct = ((totalWins / (totalWins + totalLosses + totalTies)) * 100 ).toFixed(2)

  // Log test statements
  console.log('Total Wins: ' + totalWins);
  console.log('Total Losses: '+ totalLosses);
  console.log('Total Points For: ' + totalPointsFor);
  console.log('Average Points For Per Year: ' + AvgPointsFor);
  console.log('Winning Percentage: ' + winPct + '%');

  // Test Return statement NOT WORKING WITH DOT NOTATION
  // return (totalWins, totalLosses, totalPointsFor, AvgPointsFor);
  
};
calculateATstats(masterStats.steve);


// Below does not work
// let fullOwnerList = ['shawn', 'steve'];

// function getTotalWinsForAll(ownerList) {
//   ownerList.forEach((owner) => {
//     yearsList = [2016, 2017];
//     yearsList.forEach((year) => {
//       console.log(`${owner} ${year}: ${masterStats.owner[year].wins}`)
//     })
//   })
// }

// getTotalWinsForAll(fullOwnerList);