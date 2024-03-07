function calculator(a,b,c){
    if(c=="add")
    {
        console.log(c=a+b);
    }
    else if(c=="sub"){
        console.log(c=a-b);
    }
    else if(c=="div"){
        console.log(c=a/b);
    }
    else if(c=="mullt"){
        console.log(c=a*b);
    }
    else if(c=="modul"){
        console.log(c=a%b);
    }
    
}
var a=1
var b=2

calculator(a,b,"add")
calculator(20,19,"div")
calculator(88,11,"sum")
calculator(10,11,"mullt")

calculator(40,50,"modul")