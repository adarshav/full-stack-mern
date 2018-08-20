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

  function petGenerator(pets) {
      let str = '';
    pets.forEach((pet) => {
        str = str + `${pet.name} it is of ${pet.species} and likes ${pet.petFoods[0].likes} `;
    });
    return str;
  }
  console.log(petGenerator(pets));