function sumArray(array) {

    if (typeof array != "undefined" && array != null && array.length != null && array.length > 1){
    // First, find the minimum and maximum number in the array
    const min = array.reduce((a, b) => Math.min(a, b));
    const max = array.reduce((a, b) => Math.max(a, b));
    
    //Find the indexes of the min and max numbers, and then delete them from array
    minIndex = array.indexOf(min);
    array.splice(minIndex, 1);

    maxIndex = array.indexOf(max);
    array.splice(maxIndex, 1);


//  add all of the elements in the new array
    let result = 0;
    for(let i = 0; i < array.length; i ++){
    result = result + array[i];
    };
console.log(result);
} else {
    console.log(0);
};
};

sumArray([2, 123, 4, 4, 2]);