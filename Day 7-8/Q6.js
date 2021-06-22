// Write a JavaScript program to sort an array of JavaScript objects. 
// Sample Object :
var library = [
    { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
    { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
    { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }

]; 
// Expected Output: 
// [[object Object] { author: "Walter Isaacson", libraryID: 4264, title: "Steve Jobs" }, 
// [object Object] { author: "Suzanne Collins", libraryID: 3245, title: "Mockingjay: The Final Book of The Hunger Games" }, 
// [object Object] { author: "The Road Ahead", libraryID: 1254, title: "Bill Gates" }]


function SortObject() {
    this.sortObj = function (arr) {
    for (let obj of arr) {
    Object.keys(obj).sort();
    }
    return arr
    }
    }
    let user = new SortObject();
    
    console.log( user.sortObj(library) )


