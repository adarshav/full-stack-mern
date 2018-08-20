var song = {
    name:'Neenendare',
    artist:'sonu nigam',
    duration:'3 minutes 10 seconds',
    play:function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}`;
    },
    stop:function() {
        return `${this.name} by ${this.artist} STOPPED`;
    }
}
var song1 = {
    name:'Eradu jadeyannu',
    artist:'Jayanth Kaikini',
    duration:'3 minutes 10 seconds',
    play:function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}`;
    },
    stop:function() {
        return `${this.name} by ${this.artist} STOPPED`;
    }
}
var song2 = {
    name:'nee bandu nintaaga',
    artist:'PB Srinivas',
    duration:'3 minutes 10 seconds',
    play:function() {
        return `${this.name} by ${this.artist} duration is ${this.duration}`;
    },
    stop:function() {
        return `${this.name} by ${this.artist} STOPPED`;
    }
}
console.log(song.play());
console.log(song.stop());
console.log(song1.play());
console.log(song1.stop());
console.log(song2.play());
console.log(song2.stop());
