const arr = [9, 6, 3, 12];

function processArray(arr) {
  arr.pop();
  arr.push(10);
  if(arr.includes(5)){
    arr[arr.indexOf(5)]=50;
  }
  arr.reverse();
  return arr;
}

let result = processArray(arr);
console.log(result);


```
Instructions:
Write a function named processArray that takes an array of numbers as an argument. The function should do the following:
	1. Remove the last element from the array.
	2. Add the number 10 to the end of the array.
	3. Check if the array includes the number 5. If it does, replace it with the number 50.
	4. Reverse the order of the elements in the array.
	5. Return the modified array.
For example:
• processArray([1, 2, 3, 4, 5, 6]) should return [10, 50, 4, 3, 2, 1]
• processArray([9, 6, 3, 12]) should return [10, 3, 6, 9]
```