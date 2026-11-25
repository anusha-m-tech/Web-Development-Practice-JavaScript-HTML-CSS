const arr = [10, 20, 30, 40, 50];

function firstAndLast(arr){
    return arr[0]+arr[arr.length-1];
}

let result = firstAndLast(arr);
console.log(result);