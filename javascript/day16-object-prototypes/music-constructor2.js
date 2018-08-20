//object constructor with arguments
function Song(name, artist, duration) {
    //properties:name, artist, duration
    //methods:desccription, play, stop;
    this.name = name;
    this.artist = artist;
    this.duration = duration;
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
var song = new Song('NUmb', 'LInkinPark', '3 minutes and 30 seconds');
console.log(song.play());
var song1 = new Song();
var song2 = new Song('qwerty', '12345', '56789');
console.log(song2.play());

function Person(name, age) {
this.name = name;
this.age = age;
this.description = function() {
    return `${this.name} ${this.age}`;
}
}
var person = new Person('Rakesh', 25);
console.log(person.description());
//new property being assigned to obj person
person.education = 'BE EC';
console.log(person.education);//this is only for restricted to person and not available for another object
person.fullDetails = function() {
    return `${this.name} and ${this.education}`;
}
var singer = new Person('vijaya prakash', 35);
console.log(singer.description());
//console.log(singer.fullDetails());//it returns an error, function not defined in the object
console.log(singer.education);  ///undefined