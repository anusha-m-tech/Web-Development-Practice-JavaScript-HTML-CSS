let coatingThickness = prompt("Enter the coating thickness: ");
let trafficStatus = prompt("How is the traffic? write 'High' or 'Less': ");
let isHighTraffic = trafficStatus.toLowerCase()==="high";

function benchQualityChecker(coatingThickness, isHighTraffic) {
    if(coatingThickness<50){
        return "Terrible - Replace immediately!";
    }
    else if(coatingThickness>=50 && coatingThickness<=100){
        if(isHighTraffic){
            return "Poor - Needs recoating soon";
        }
        else{
            return "Acceptable - Monitor closely";
        }
    }
    else if(coatingThickness>=101 && coatingThickness<=150){
        return "Good - No action needed";
    }
    else{
        return "Excellent - Overcoated!";
    }
}

let result = benchQualityChecker(coatingThickness, isHighTraffic);
console.log(result);