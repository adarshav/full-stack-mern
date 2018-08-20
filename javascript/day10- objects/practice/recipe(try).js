var salad = {
	"recipe_name": "Basic Fruit Salad", 
	"yields": {
	    	"servings": 6
	  		}, 
	"ingredients": [ 
		{ 
			"apple": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"banana": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"orange": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"grapes": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		}
	], 
	        
	"steps": [
		{ "step1": "Cut the apple into cubes." },
		{ "step2": "Cut the banana into slices." },
		{ "step3": "Peel the orange, and divide into segments."}, 
		{ "step4": "Combine all ingredients in a bowl." }, 
		{ "step5": "Mix to combine." }
	]
}

/*
function prepareRecipe(recipe);
'RECIPE -  BASIC FRUIT SALAD '
serves - 6 people
INGREDIENTS- apple - 1 each
banana -1 each
orange -1 each
grapes -1 each
*/
console.log(Object.keys(salad));
console.log('----------------------------------------------');
function prepareRecipe(salad) {
console.log(`RECEIPE- ${salad.recipe_name.toUpperCase()}`);
console.log(`serves - ${salad.yields.servings} people`);
salad.ingredients.forEach(function(ingredient) {
    var item = Object.keys(ingredient);
    console.log('--------------------------------');
    console.log(item);
    console.log(`${item} - ${ingredient[item].amounts.amount} ${ingredient[item].amounts.unit}`);
});
console.log('S T E P S');
salad.steps.forEach(function(step) {
    var result = Object.keys(step);
    var stepDescription = Object.values(step);
    console.log(`${result} - ${stepDescription}`);
});
}
console.log(prepareRecipe(salad));