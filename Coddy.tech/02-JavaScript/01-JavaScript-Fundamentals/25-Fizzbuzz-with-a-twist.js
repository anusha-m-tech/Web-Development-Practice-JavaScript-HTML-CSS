let num = parseInt(prompt("Enter a number: "));

let fizzbuzz = int =>{
    if((int%3==0) && (int%7==0)){
        return "FizzBuzz";
    }
    else if(int%3==0){
        return "Fizz";
    }else if(int%7==0){
        return "Buzz";
    }else if(String(int).includes('3')){
        return "Almost Fizz";
    }else{
        return String(int);
    }
}

console.log("Welcome to FizzBuzz!");
for(let i=1;i<=num;i++){
    console.log(fizzbuzz(i));
}