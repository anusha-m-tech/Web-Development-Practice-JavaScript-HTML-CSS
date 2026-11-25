let colors = ["red", "blue", "green"];
colors.push("yellow");
let removedColor = colors.shift();
colors.unshift("purple");
let lastColor = colors.pop();
console.log(colors);
console.log(removedColor);
console.log(lastColor);


```
Instructions:
You are given the following array:
let colors = ["red", "blue", "green"];
Your task is to perform the following operations in order:
	1. Add "yellow" to the end of the array using a method.
	2. Remove the first color from the array and store it in a variable named removedColor.
	3. Add "purple" to the beginning of the array using a method.
	4. Remove the last color from the array and store it in a variable named lastColor.
Finally, print the following:
	• The updated array.
	• The value of removedColor.
	• The value of lastColor.
```