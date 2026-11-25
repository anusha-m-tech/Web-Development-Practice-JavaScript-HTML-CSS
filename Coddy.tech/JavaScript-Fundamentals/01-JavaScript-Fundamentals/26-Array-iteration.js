const arr = ['test', 3.2, 99];

function values(arr) {
    let myArray = arr;
    for(let i=0;i<myArray.length;i++){
        console.log(myArray[i]);
    }
}

values(arr);