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
function makeRecipe(salad) {
    let fruit, prepare;
    console.log(`RECIPE - ${salad.recipe_name}\nServes -${salad.yields.servings} people \n Ingredients -`);
    salad.ingredients.forEach((ingredient) => {
        fruit = Object.keys(ingredient)[0];
        console.log(`${fruit} ${ingredient[fruit].amounts.amount} ${ingredient[fruit].amounts.unit}`);
    });

    salad.steps.forEach((step) => {
        prepare = Object.keys(step)[0];
        console.log(`${prepare} - ${Object.values(step)[0]}`);
        //console.log(Object.values(step)[0]);

    });
}
console.log(makeRecipe(salad));
