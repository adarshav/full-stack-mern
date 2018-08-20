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


  function petDetails(pet) {
    return `${pet.name} the ${pet.species} likes ${pet.petFoods[0].likes} an dislikes ${pet.petFoods[1].dislikes}`
  }
  pets.forEach(function(pet){
    console.log(petDetails(pet));
    });

  

    // function petDetails(pets[i]) {
    //     return `${pets[i].name} the ${pets[i].species} likes ${pets[i].foods.likes[0]}, ${pets[i].foods.likes[1]}`
    // }

  //console.log(petDetails(pets[i]));

  