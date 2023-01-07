let directors = [
  {
    name: 'Dean DeBlois',
    description: 'Canadian film director, film producer, screenwriter, and animator. He is best known for writing and directing the Oscar-nominated animated films Lilo & Stitch for Walt Disney Animation Studios (with Chris Sanders), the How to Train Your Dragon film trilogy for DreamWorks Animation (the first film also with Sanders), and directing the documentary Heima about the Icelandic band Sigur Rós.'
  },
  {
    name: 'Andrew Stanton',
    description: 'American filmmaker and voice actor based at Pixar, which he joined in 1990.[2] His film work includes co-writing and co-directing Pixar\'s A Bug\'s Life (1998), directing Finding Nemo (2003)[3] and the sequel Finding Dory (2016), WALL-E (2008), and the live-action film, Disney\'s John Carter (2012), and co-writing all four Toy Story films (1995-2019) and Monsters, Inc. (2001).'
  },
  {
    name: 'Rian Johnson',
    description: 'American filmmaker. He made his directorial debut with the neo-noir mystery film Brick (2005), which received positive reviews and grossed nearly $4 million on a $450,000 budget. Transitioning to higher-profile films, Johnson achieved mainstream recognition for writing and directing the science-fiction thriller Looper (2012) to critical and commercial success. Johnson landed his largest project when he wrote and directed the space opera Star Wars: The Last Jedi (2017), which grossed over $1 billion. He returned to the mystery genre with Knives Out (2019), which earned him an Academy Award nomination for Best Original Screenplay, and its sequel, Glass Onion (2022).'
  },
]

directors.forEach((director) => {
  console.log(`${director.name}: ${director.description}\n`)
})