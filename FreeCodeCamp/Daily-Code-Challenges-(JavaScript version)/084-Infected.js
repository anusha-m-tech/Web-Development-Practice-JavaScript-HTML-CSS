let days = parseInt(prompt("Enter number of days: "));

function infected(days) {
  let infected=1;
  for(let day=1;day<=days;day++){
      infected*=2;
      if(day%3===0){
        let patched = Math.ceil(infected * 0.2)
        infected-=patched;
      } 
  }
  return infected;
}

let infectedComputers = infected(days);
console.log(`Total Computers that were infected in ${days} days: ${infectedComputers}`);
