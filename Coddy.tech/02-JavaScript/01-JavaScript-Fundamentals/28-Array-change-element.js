const arr = [8, 8, 8, 8];
const index = 2;
const newElement = 7;

function changeElement(arr, index, newElement) {
    arr[index]=newElement
    return arr;
}

let result = changeElement(arr, index, newElement);
console.log(result);