const arr = [8, 3, 1, 5, 3, 1];

function reverseArray(arr) {
    const reversedArr = [];
    for(let i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

let result = reverseArray(arr);
console.log(result);

// This excercise is not part of coddy, wrote this after the Swap Ends lesson.