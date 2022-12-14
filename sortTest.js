// let newVar = 12;
// shawnB.pointsFor += newVar;
// console.log(shawnB.pointsFor)


// let masterStats = (function () {
//   // MASTER STATS FOR EACH TEAM  *************************************************
//   let currentStandings = [];

//   let shawnB = {
//     pointsFor: 1648.94,
//     wins: 12,
//     losses: 3,
//     ties: 0,
//   }

//   let steveS = {
//     pointsFor: 1804.00,
//     wins: 8,
//     losses: 6,
//     ties: 0,
//   }

//   let domN = {
//     pointsFor: 1733.62,
//     wins: 8,
//     losses: 6,
//     ties: 0,
//   }

//   let lloyd = {
//     pointsFor: 1659.44,
//     wins: 8,
//     losses: 6,
//     ties: 0,
//   }

//   let joeK = {
//     pointsFor: 1651.34,
//     wins: 7,
//     losses: 7,
//     ties: 0,
//   }

//   let codyZ = {
//     pointsFor: 1568.40,
//     wins: 7,
//     losses: 7,
//     ties: 0,
//   }

//   let flipp = {
//     pointsFor: 1598.46,
//     wins: 7,
//     losses: 7,
//     ties: 0,
//   }

//   let danG = {
//     pointsFor: 1661.46,
//     wins: 6,
//     losses: 8,
//     ties: 0,
//   }

//   let aaronM = {
//     pointsFor: 1622.72,
//     wins: 6,
//     losses: 8,
//     ties: 0,
//   }

//   let jimmyW = {
//     pointsFor: 1486.54,
//     wins: 6,
//     losses: 8,
//     ties: 0,
//   }

//   let danteN = {
//     pointsFor: 1675.76,
//     wins: 5,
//     losses: 9,
//     ties: 0,
//   }

//   let donI = {
//     pointsFor: 1567.62,
//     wins: 5,
//     losses: 9,
//     ties: 0,
//   }


//   // Functions *****************************************************************
//   function winPercentage(owner) {
//     return (owner.wins / (owner.wins + owner.losses + owner.ties)).toFixed(3);
//   }

//   return {
//     shawnB: shawnB,
//     steveS: steveS,
//     winPercentage: winPercentage,
//   }

// })();

// // Might have something here
// let masterStatsList = [
//   {
//     manager: "shawnB",
//     pointsFor: 1648.94,
//     wins: 11,
//     losses: 3,
//     ties: 0,
//   },
//   {
//     manager: "steveS",
//     pointsFor: 1804.00,
//     wins: 8,
//     losses: 6,
//     ties: 0,
//   }
// ]

// let masterList2 = [];

// masterStatsList.forEach(item => {
//   if (item.manager == "shawnB") {
//     console.log(item)
//   }
// });


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