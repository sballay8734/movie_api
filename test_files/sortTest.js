// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
let leagueMembers = {
  teamOne: 
    {
      pointsFor: 1648.94,
      wins: 12,
      losses: 3,
      ties: 0,
    },
  teamTwo: 
    {
      pointsFor: 1804.00,
      wins: 8,
      losses: 6,
      ties: 0,
    },
  teamThree: 
    {
      pointsFor: 1567.62,
      wins: 5,
      losses: 9,
      ties: 0,
    },
  teamFour: 
    {
      pointsFor: 1622.72,
      wins: 6,
      losses: 8,
      ties: 0,
    },
}

for (const key in leagueMembers) {
  console.log(key); // WORKS
}

for (const key in leagueMembers) {
  console.log(key.pointsFor) // DOES NOT WORK (undefined) because each key is actually now coming from a list which has no values.
}

// TESTING