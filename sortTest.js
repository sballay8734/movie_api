
let teamList = [
  {
    teamOwner: "Shawn",
    pointsFor: 1768,
    wins: 12,
    losses: 3,
    record: teamList[0].wins + " / " + teamList[0].losses, // how do you access keys of object inside itself?
  },
  {
    teamOwner: "Donnie",
    record: getRecord(),
    pointsFor: 1668,
    wins: 5,
    losses: 9,
  },
]

function getRecord(wins, losses) {
  return (teamList[index].wins + " / " + teamList[index].losses)
}

console.log(teamList[0].record)