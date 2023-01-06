let masterStats = {
  shawn: {
    twentySixteen: 
      {
        pft: 1409.38,
        pfa: 123.32,
        wins: 12,
        losses: 2
      },
    twentySeventeen: 
      {
        pft: 1449.38,
        pfa: 127.52,
        wins: 11,
        losses: 3
      },
  },
}

function calculateTotalWins(owner) {
  value = masterStats.owner.twentySixteen;
  value2 = masterStats.owner.twentySeventeen;

  return value + value2;
}

console.log(calculateTotalWins(shawn));