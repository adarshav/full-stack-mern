//object prototype
/*
sometimes we need a blueprint  for creating many objects of same type object protoypes functions are object constructor function allows us to create  an object type
objects of the same type is created by calling the constructor function  with a new keyword
the keyword inside an object always refers to  the object itself(this)
*/
//object prototype function = object constructor function - without arguments
//function name in pascal case
function Song() {
    //properties:name, artist, duration
    //methods:desccription, play, stop;
    this.name;
    this.artist;
    this.description = function() {
        return `${this.name} by ${this.artist} is ${this.duration} long`;
    };
    this.play = function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}`;
    };
    this.stop = function() {
        return `${this.name} by ${this.artist} STOPPED`;
    }
}
var song = new Song();
song.name = 'Nee bandu nintaaga';
song.artist = 'PBS';
song.duration = '3 minutes and 30 seconds';
console.log(song);
console.log(song.description());
//same as for song 1 and song2