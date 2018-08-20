var data = [
    [ 'animals',
      [
        'dogs', ['Corgi', 'Sheltie'],
        'cats', ['Tabby','Black'],
        'pigs', ['Teacup']
      ]
    ],
    [ 'guitars',
      [
        'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
        'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
      ]
    ]
  ];
  /*
  {
  animals : {
    dogs : ['Corgi', 'Sheltie'],
    cats : ['Tabby','Black'],
    pigs : ['Teacup']
},
  guitars : {
    Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
    Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
  }
}
   */
  function objectifyingArrays(data) {
      var newData = {}
       for(var i = 0;i < data.length;i++) {
        newData.animals = data[i];
        for(var j = 0;j < data[0][1][1].length;i++) {
            var a1 = data[0][1][1];
        }
        //newData.animals.dogs = 
       }
       return a1;
       console.log(data[0][1][1][0]);

    return {newData};
  }
  console.log(objectifyingArrays(data));