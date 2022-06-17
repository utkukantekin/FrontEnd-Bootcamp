alert(
  'for the equation " y = 3x + 4k " enter numeric values for the two variables and don\'t enter any value for the variable you want me to find.'
);

while (true){   // kullanıcının en az iki değişken değeri girişi yapması sağlanmakta.
                // sadece sayı girişi için ekstra kontrol eklenmeli.
    counter = 0;
    var counter;
    var x = prompt("value of X=");
    var y = prompt("value of Y=");
    var k = prompt("value of K=");

    if(x==""){ //array kullanmadığım için birden fazla girilmemiş değişen kontrolünü tek tek yapıyorum
        counter++;
    }
    if(y==""){
        counter++;
    }
    if(k==""){
        counter++;
    }

    if (counter >1) {
        alert("Please Enter At Least Two Variable Values");
    } else if (counter == 0) {
        alert("Please Leave One Of The Variables Empty");
    }else{
        break;
    }
}

let findX = (y,k)=>{
    return (y-4*k)/3;
}

let findY = (x,k)=>{
    return 3*x+4*k;
}

let findK = (x,y)=>{
    return (y-3*x)/4;
}

(
    ()=>{
        switch ("") {
            case x:
                document.writeln(`The Equation: <br/>
                y = 3x + 4k <br/>
                Entered Values: <br/>
                y = ${y} , k = ${k} <br/>
                Value Of x = ${findX(y,k)}`)
                break;
            
            case y:
                document.writeln(`The Equation: <br/
                y = 3x + 4k <br/
                Entered Vvalues: \n <br/>
                x = ${x} , k = ${k} \n <br/>
                Value Of y = ${findY(x,k)}`)
                break;
            
            case k:
                document.writeln(`The Equation: <br/
                y = 3x + 4k <br/
                Entered Vvalues: \n <br/>
                x = ${x} , y = ${y} \n <br/>
                Value Of k = ${findK(x,y)}`)
                break;
            
            default:
                break;
        }
    }
)();