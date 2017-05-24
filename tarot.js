
//this is an array of objects containing each card,
//name, score, and description
var tarotDeck = [
  { name: 'Fool',
    score: 0,
    explanation: "the Fool is usually interpreted as the protagonist" +
    "of a story, and the Major Arcana is the path the Fool takes " +
    "through the great mysteries of life and the main human archetypes."
  },
  { name: 'Magician',
    score: 1},
  { name: 'Priestess',
    score: 2},
  { name: 'Empress',
    score: 3},
  { name: 'Emperor',
    score: 4},
  { name: 'Heirophant',
    score: 5},
  { name: 'Lovers',
    score: 6},
  { name: 'Chariot',
    score: 7},
  { name: 'Strength',
    score: 8},
  { name: 'Hermit',
    score: 9,
    explanation: "An old man carrying a staff in one hand and a lit lantern" +
    " containing a six-pointed star in the other. In the background is a wasteland." +
    "The Hermit suggests the need to withdraw from society to become comfortable with oneself" +
    " or possibly the need to return from isolation with the knowledge one has gained."
  },
  { name: 'Wheel',
    score: 10},
  { name: 'Justice',
    score: 11},
  { name: 'Hanged Man',
    score: 12,
    explanation: "A young man is hanging by one ankle from a tree," +
    " his face is serene and his head is surrounded by a nimbus." +
    "His calm demeanor suggests that he has chosen this fate, " +
    "and is calmly awaiting the outcome of his sacrifice."
  },
  { name: 'Death',
    score: 13},
  { name: 'Temperance',
    score: 14},
  { name: 'Devil',
    score: 15},
  { name: 'Tower',
    score: 16},
  { name: 'Star',
    score: 17,
    explanation:"A young woman is kneeling before a body of water," +
    " she holds two vessels, and pours each of them out, one onto land," +
    " the other into the water. A large star shines above her head in a field" +
    " of smaller ones. It appears that she has great resources at her disposal," +
    " although she may not be aware of them."
  },
  { name: 'Moon',
    score: 18},
  { name: 'Sun',
    score: 19},
  { name: 'Judgement',
    score: 20},
  { name: 'Universe',
    score: 21},
  //there will be a total of 22 possible picks
];
/*The plan for this version is to write a function that will select three cards at random
* out of the 22 major trumps, then print each card name and a short explanation.
*/
function drawThree(tarotDeck) {
  //created an empty array to hold the random picks
  var userPick = [];
 
  //this part will push each pullCard to array userPick
  while(userPick.length < 3){
     //this var will select a random card object
  var pullCard = tarotDeck[Math.floor(Math.random() * tarotDeck.length)];
  userPick.push(pullCard);
  }
  // this bit will console log the resulting items
  // once the userPick array is full
  if (userPick.length == 3) {
    console.log(userPick);
  }

}
/*
*commented out for safety
*
var userPicked[];
function drawThree(tarotDeck) {
  var userPicked.floor(Math.random() * 22);
  console.log(userPicked);
  //this for loop may not be needed
  for (var i = 0; i < 3; i++) {
    console.log(tarotDeck[i].name);
    //include a while loop? loop while the array userPicked contains
    //less than three objects
    while(userPicked[i]
    } 
  }
  *
  */