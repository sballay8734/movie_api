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
  let yearsList = [2016, 2017, 2018, 2019];
  let totalWins = 0;
  let totalLosses = 0;
  let totalTies = 0;
  let totalPointsFor = 0;

  // Function Logic
  yearsList.forEach((year) => {
    totalWins += owner[year].wins;
    totalLosses += owner[year].losses;
    totalPointsFor += owner[year].pft
    // etc etc...
  });

  // Avg Points per year
  let AvgPointsFor = (totalPointsFor / yearsList.length);
  let winPct = (totalWins / (totalWins + totalLosses + totalTies)).toFixed(2)

  // Log test statements
  console.log('Total Wins: ' + totalWins);
  console.log('Total Losses: '+ totalLosses);
  console.log('Total Points For: ' + totalPointsFor);
  console.log('Average Points For Per Year: ' + AvgPointsFor);
  console.log('Winning Percentage: ' + winPct);

  // Test Return statement NOT WORKING WITH DOT NOTATION
  // return (totalWins, totalLosses, totalPointsFor, AvgPointsFor);
  
};
calculateATstats(masterStats.steve);