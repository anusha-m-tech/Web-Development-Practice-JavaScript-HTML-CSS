let weight=parseInt(prompt("Enter the weight of the package: "));

if(weight<=20){
    console.log("Postage: Standard");
}
else if(weight<=100){
    console.log("Postage: Large letter");
}
else if(weight<=500){
    console.log("Postage: Small parcel");
}
else{
     console.log("Postage: Parcel");
}