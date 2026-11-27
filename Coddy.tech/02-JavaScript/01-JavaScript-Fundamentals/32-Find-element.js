const arr = [5, 8, 34, 2, 4, 1];
const num = 2;

function findElement(arr, num) {
    if(arr.includes(num)){
        return arr.indexOf(num);
    }
    else{
        return -1;
    }
}

let result = findElement(arr, num);
console.log(result);