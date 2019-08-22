const fs = require('fs');
// console.log("iam notes.js")
// const add = function(a, b) {
//     return a + b
// }

// module.exports = add;

const getNotes = function() {
    return 'your notes ...!'
}

//Adding a notes
const addNotes = function(title, body) {
    const notes = loadNotes();

    //to avoid duplication of titles
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if(duplicateNotes.length === 0) {
        notes.push({
            title:title, 
            body:body
        })
        saveNotes(notes);
        console.log('new note added');
    } else {
        console.log('note title taken');
    }
    // console.log(notes);
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {
    try {//error handling
        const dataBuffer = fs.readFileSync('notes.json');
        //dataBuffer will be in decimal digits  it should be converted to string
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {//if try block does not work then catch works
         return [];
    }     
}
//like this node app.js add --title="t" --body="b" should b given in cli

//removing the note
const removeNotes = function(title) {
    console.log(title);
    //first load the notes
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title;
    })


    saveNotes(notesToKeep);
}
module.exports = {
    getNotes:getNotes,
    addNotes:addNotes ,
    removeNotes:removeNotes
}