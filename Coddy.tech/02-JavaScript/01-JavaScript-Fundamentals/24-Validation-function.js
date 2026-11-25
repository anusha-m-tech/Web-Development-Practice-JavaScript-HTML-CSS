let username=prompt("Enter the username: ");
let password=prompt("Enter the password: ");
let isValid = (username,password) => {
    if (username=="admin" || (username=="user" && password=="qweasd")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValid(username,password));