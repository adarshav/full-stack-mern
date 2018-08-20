
var superHeroes = [
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
/*TEST CASE -

1. superPower(superHeroes, "Molecule Man");
returns 'Radiation resistance, Turning tiny, Radiation blast'

2. superPower(superHeroes, 'Iron Man'); 
returns 'Iron Man is not in the super heroes list'
*/

function superPower(a, name) {
//console.log(Object.keys(superHeroes));
var result;
  a.forEach(function(hero) {
    if(hero.name === name) {
      result = hero.powers.join(',');
      console.log(result);
    } else if(hero.name !== name) {
      return `${name} is not found in the superheroes list`;
    }else if(name === undefined) {
      return 'invalid input';
    }
  });
  //console.log(superHeroes[0]);
}
console.log(superPower(superHeroes, 'Molecule Man'));
console.log(superPower(superHeroes, 'Iron Man'));