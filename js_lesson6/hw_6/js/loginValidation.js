var dbUserEmail ="deneme@gmail.com"; // let's pretend like it comes from db
var dbUserPassword = "root"          // let's pretend like it comes from db

let validateEmail = (enteredValue)=>{
    if(enteredValue == dbUserEmail){
        return true;
    }
    else{
        return false;
    }
}
let validatePassword = (enteredValue)=>{
    if(enteredValue == dbUserPassword){
        return true;
    }
    else{
        return false;
    }
}

let logAdmin = () =>{
    document.writeln("admin entered")
}

let blockUser = () => {
    document.writeln("user blocked!!")
}

(()=>{
    let counter = 4;
    while(counter > 0){
        let userEmail = String(prompt("please enter user email:"));
        let userPassword = String(prompt("please enter password"));
        
        if(validateEmail(userEmail) && validatePassword(userPassword)){
            return logAdmin();
        }else {
            counter -= 1;
            alert("Wrong information. Remaining entries = " + counter)
        }
    }
    return blockUser();
})();