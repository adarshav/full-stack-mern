//Body:

/*Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:
*/
colour_association = ([["white", "goodness"], ["blue", "tranquility"]])

//returns [{'white': "goodness"},{'blue': "tranquility"}])

function color(colour_association) {
     var final = [];
    colour_association.forEach(function(value) {
        var result = {};
        result[value[0]] = value[1];
        final.push(result);
    });
    return final;
}
console.log(color(colour_association));