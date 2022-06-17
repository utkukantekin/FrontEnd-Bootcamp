
let createPassword = ()=>{
  while(true){
    let firstPassword = prompt("Please enter your password");
    let secondPassword = prompt("Please enter again");

    if (firstPassword == secondPassword) {
      document.writeln(`Password creation successful <br/>
      Welcome`);
      break;
    } else {
      alert("Entered passwords don't match. Try Again")
    }
  }
}

createPassword();
