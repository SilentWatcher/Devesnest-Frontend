function first_n_element(array,n){
    if (n === undefined) { return array[0]; }
    if (n < 0) { return []; }

    var SliceArray =array.slice(0, n);
    return SliceArray;
};

console.log(first_n_element([7, 9, 0, -2]));
console.log(first_n_element([],3));
console.log(first_n_element([7, 9, 0, -2],3));
console.log(first_n_element([7, 9, 0, -2],6));
console.log(first_n_element([7, 9, 0, -2],-3));
