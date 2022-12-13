let masterStatsList = [
  {
    manager: "shawnB",
    pointsFor: 1648.94,
    wins: 11,
    losses: 3,
    ties: 0,
  },
  {
    manager: "steveS",
    pointsFor: 1804.00,
    wins: 8,
    losses: 6,
    ties: 0,
  }
]

let masterList2 = [];

masterStatsList.forEach(item => {
  if (item.manager == "shawnB") {
    console.log(item)
  }
});