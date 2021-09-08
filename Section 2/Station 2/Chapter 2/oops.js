// //Demo1
// class Customer{
//     Save(){
// 		console.log("Customer Saved: "+this.CustomerName+"("+this.Designation+"-"+this.CompanyName+")");
//     }
// }

// let c=new Customer();
// c.CustomerName="Sukesh Marla";
// c.Designation="Director";
// c.CompanyName="Just Compile";
// c.Save();


// //Demo2
// class Customer{
//     constructor(CustomerName,CompanyName,Designation){
//         this.CustomerName=CustomerName;
//         this.CompanyName=CompanyName;
//         this.Designation=Designation;
//     }
//     Save(){
// 		console.log("Customer Saved: "+this.CustomerName+"("+this.Designation+"-"+this.CompanyName+")");
//     }
// }

// let c=new Customer("Dipesh Shinde","CEO","Just Compile");
// c.Save();

// //Demo3.1
// class Customer{
//     constructor(CustomerName,CompanyName,Designation){
//         this.CustomerName=CustomerName;
//         this.CompanyName=CompanyName;
//         this.Designation=Designation;
//     }
//     Save(){
// 		console.log("Customer Saved: "+this.CustomerName+"("+this.Designation+"-"+this.CompanyName+")");
//     }
// }
// class GoldCustomer extends Customer{
    
// }

// let c=new GoldCustomer("Parvez","Siddiqui","Technical Architect");
// c.Save();


// //Demo3.2
// class Customer{
//     constructor(CustomerName,CompanyName,Designation){
//         this.CustomerName=CustomerName;
//         this.CompanyName=CompanyName;
//         this.Designation=Designation;
//     }
//     Save(){
// 		console.log("Customer Saved: "+this.CustomerName+"("+this.Designation+"-"+this.CompanyName+")");
//     }
// }
// class GoldCustomer extends Customer{
//     constructor(){}
// }

// let c=new GoldCustomer("Parvez","Siddiqui","Technical Architect");
// c.Save();

// //Demo3.3
// class Customer{
//     constructor(CustomerName,CompanyName,Designation){
//         this.CustomerName=CustomerName;
//         this.CompanyName=CompanyName;
//         this.Designation=Designation;
//     }
//     Save(){
// 		console.log("Customer Saved: "+this.CustomerName+"("+this.Designation+"-"+this.CompanyName+")");
//     }
// }
// class GoldCustomer extends Customer{
//     constructor(){
//         super();
//     }
// }

// let c=new GoldCustomer("Parvez","Siddiqui","Technical Architect");
// c.Save();

//Demo3.4
class Customer{
    constructor(CustomerName,CompanyName,Designation){
        this.CustomerName=CustomerName;
        this.CompanyName=CompanyName;
        this.Designation=Designation;
    }
    Save(){
		console.log("Customer Saved: "+this.CustomerName+"("+this.Designation+"-"+this.CompanyName+")");
    }
}
class GoldCustomer extends Customer{
    constructor(CustomerName,CompanyName,Designation){
        super(CustomerName,CompanyName,Designation);
    }
}

let c=new GoldCustomer("Parvez","Siddiqui","Technical Architect");
c.Save();