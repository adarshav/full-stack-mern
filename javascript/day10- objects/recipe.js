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

function prepareRecipe(recipe) {
    console.log(`RECIPE - ${salad.recipe_name}`);
    console.log(`SERVES - ${salad.yields.servings}`);
    salad.ingredients.forEach(function(ingredient) {
        //console.log(Object.keys(ingredient)[0]);
        var item = Object.keys(ingredient)[0];
        // console.log(item);
        // console.log(ingredient[item].amounts.amount);
        // console.log(ingredient[item].amounts.unit);
        console.log(`${item} - ${ingredient[item].amounts.amount} ${ingredient[item].amounts.unit}`);

    });
    salad.steps.forEach(function(item) {
        var result = Object.keys(item)[0];
        console.log(`${result} - ${item[result]}`);//we cannot pass dot operator in an loop so we passed [](square brackets)
    });
}
console.log(prepareRecipe(salad));
