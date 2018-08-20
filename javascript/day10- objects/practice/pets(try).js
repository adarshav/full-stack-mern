var pets = [
    {
      "name": "Meowsy",
      "species" : "cat",
      "petFoods": [
        { "likes": ["tuna", "catnip"] },
        { "dislikes": ["ham", "zucchini"] }
      ]
    },
    {
      "name": "Barky",
      "species" : "dog",
      "petFoods":[
        { "likes": ["bones", "carrots"] },
        { "dislikes": ["tuna"] }
      ]
    },
    {
      "name": "Purrpaws",
      "species" : "cat",
      "petFoods": [
       { "likes": ["mice"] },
       { "dislikes": ["cookies"] }
    ]
    }
  ]
//   console.log(pets[0].name);
//   console.log(pets[0].species);
// console.log(pets[0].petFoods[0].likes.join(' '));
// console.log(`${pets[0].name} is of ${pets[0].species} type  it likes ${pets[0].petFoods[0].likes} and it dislikes ${pets[0].petFoods[1].dislikes}`);

/*
iterate the array of objects and dont pass the entire (pets) array of objects into a function when we iterate a single object is passed into a function
*/
//different type of function passing

function petDetails(pet) {
//console.log(pet);
console.log(`${pet.name} the ${pet.species} likes ${pet.petFoods[0].likes} and dislikes ${pet.petFoods[1].dislikes}`);
}


pets.forEach(function(pet){//forEach is used for iteration and 'for' loop is used  for looping, looping is different from iterating
petDetails(pet);//function call
});
var myPet = {
"name":"puppy",
"species":"dog",
"petFoods":[
    {  "likes":["bread", "milk"]},
    {  "dislikes":["carrot"]}
]
}
console.log(petDetails(myPet));