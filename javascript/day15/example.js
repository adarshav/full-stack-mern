var song = {
    name:"Numb",
    artist:"Linkin Park",
    minutes:4,
    seconds:3,
    genre:'80s',
    playing:false,
    play:function() {
        if (!this.playing) {
            this.playing = true;
            console.log("playing " + this.name + " by " + this.artist);
        }
    },
    pause:function() {
        if(this.playing) {
            this.playing = false;
        }
    }
};
song.play();
song.pause();