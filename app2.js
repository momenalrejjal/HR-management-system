'use strict';
//let head = document.getElementById("head");

//let title = document.createElement("h1");
//title.textContent = "Home page";
//head.appendChild(title);
//title.style.color = "blue";

//let empid =document.getElementById("empid");
//.textContent = uniqueid(); 
//console.log(uniqueid());

let form = document.getElementById("form");



form.addEventListener("submit",handlesubmit)
    function handlesubmit(event){
        event.preventDefault();
        let txtid = event.target.txtid.value;
        let in1 = event.target.in1.value;
        let department = event.target.department.value;
        let level = event.target.level.value;
        let image = event.target.image.value;
        console.log(image);
        //let newEmployee = new Employee(txtid ,in1 ,department ,level ,image);
        //newEmployee.ransalary();
        //newEmployee.render();
    }



