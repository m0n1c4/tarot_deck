
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
    score: 9},
  { name: 'Wheel',
    score: 10},
  { name: 'Justice',
    score: 11},
  { name: 'Hanged Man',
    score: 12},
  { name: 'Death',
    score: 13},
  { name: 'Temperance',
    score: 14},
  { name: 'Devil',
    score: 15},
  { name: 'Tower',
    score: 16},
  { name: 'Star',
    score: 17},
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
/*The plan is to write a function that will select three cards at random
out of the 22 major trumps, then print each card name and a short explanation.
maybe I need to create a new blank array and fill it with each card pick? */
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