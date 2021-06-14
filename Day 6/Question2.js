//The slice() method extracts a section of a string and returns 
//it as a new string, without modifying the original string.
function array_clone(arr){
    var clone=arr.slice(2);
    return clone;
}
console.log(array_clone([1,2,4,0]));
console.log(array_clone([1,2,[4,0]]));