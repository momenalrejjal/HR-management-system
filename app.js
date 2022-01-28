'use strict';
let allEmployee =[];
let department = ["administration" ,"marketing" ,"development" ,"finance"];
//let level = ["junior" ,"mid-senior" ,"senior"];
let salary = [2000 ,1500 ,1000 ,500];

function Employee(employeeid ,fullname ,department ,junior ,midsenior , senior, imageurl ){
    this.employeeid = employeeid;
    this.fullname = fullname;
    this.department = department; 
    this.isjunior = junior;
    this.ismidsenior = midsenior;
    this.issenior = senior; 
    this.imageurl = imageurl;
    this.salary = 0;
    allEmployee.push(this);}

    let GhaziSamer =new Employee(1000 ,"Ghazi Samer" ,department[0] ,false ,false ,true);
let lanaali = new Employee(1001 ,"Lana Ali" ,department[3] , false ,false ,true);
let tamaraayoub = new Employee(1002 ,"Tamara Ayoub" ,department[1] ,false ,false ,true);
let saifwalid = new Employee(1003 , "Saif Walid", department[0], false ,true ,false);
let omarzaid = new Employee(1004 , "Omar Zaid", department[2], false ,false ,true);
let ranasaleh = new Employee(1005 , "Rana Saleh", department[2], true ,false ,false);
let hadiahmad = new Employee(1006 , "Hadi Ahmad", department[3], false ,true ,false);

Employee.prototype.render = function(){

}

Employee.prototype.ransalary = function(min, max){
    this.salary  = getransalary(min, max);
}

function getransalary (min, max){
    return (Math.floor(Math.random() * (max - min + 1))+ min)-100*7.5;
}

for (let i=0 ;i<allEmployee.length ;i++){
    if(allEmployee[i].issenior){
    allEmployee[i].ransalary(1500 ,2000);
    }else{
        if(allEmployee[i].ismidsenior){
            allEmployee[i].ransalary(1000 ,1500);
            }else{
                allEmployee[i].ransalary(500 ,1000);
            }
        }
    }

Employee.prototype.render = function(){
    document.write(`<p> the employee full name is : ${this.fullname}<p>`);
    document.write(`<p> the employee salary is : ${this.salary}<p>`);
};
for(let i=0 ; i<allEmployee.length ; i++){
    console.log(allEmployee[i]);
    allEmployee[i].render();
    };