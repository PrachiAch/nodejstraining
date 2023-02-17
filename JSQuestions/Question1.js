//Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
function sumArray(array){
    const ourArray = [1,4,3,4,5,-1];
    let sum = 0;

    for (let i = 0; i < ourArray.length; i+=1){
        sum += array[i];
    }

    return sum;
}

console.log(sumArray([1,4,3,4,5,-1]));

