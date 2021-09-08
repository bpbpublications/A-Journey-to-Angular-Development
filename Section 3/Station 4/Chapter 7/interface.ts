interface MyInterface{
    MyMethod(x:string,y:number):string;
    MyMethod2():number;
}

function myFunction(type1:MyInterface,type2:MyInterface){
    let a=type1.MyMethod("A",12);
    let b=type1.MyMethod2();
    let c=type2.MyMethod("B",12);
    let d=type2.MyMethod2();
}

class Customer{

}

let c=new Customer();
myFunction(c,c);