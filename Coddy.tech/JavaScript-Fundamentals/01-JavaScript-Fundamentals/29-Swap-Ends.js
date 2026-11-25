const arr = [8, 3, 1, 5, 3, 1];

function swapEnds(arr) {     
    let firstNum = arr.shift();
    let lastNum = arr.pop();
    arr.unshift(lastNum);
    arr.push(firstNum);
    return arr;
}

let result = swapEnds(arr);
console.log(result);