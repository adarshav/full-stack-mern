/*
Write a JavaScript program to sort an array of JavaScript objects based on the library-ID in descending order.
Sample Object :

Expected Output:

[[object Object] {
  author: "Steve jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}]

*/
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
 
// function descending(library) {
//     // var result = library.sort(function(a, b) {
//     //     return b.libraryID - a.libraryID;
//     // })
//     // return result;

// }
// console.log(descending(library));

// Object.prototype.sort = function(library) {
//     var result = library.sort(function(a, b) {
//         return b.libraryID - a.libraryID;
//     });
//     return result;
// }
// console.log(library.sort());