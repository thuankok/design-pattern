function Employee(name){
    this.name = name;
    
    this.say = function (){
        console.log("I'm employee " + name);
    }
}

// class EmployeeClass {
//     constructor(name){
//         this.name = name
//     }
    
//     say(){
//         console.log("I'm employee " + this.name);
//     }
// }


function EmployeeFactory(){
    this.create = function (name){
        return new Employee(name)
    }
}

// class EmployeeFactoryClass {
//     constructor(){

//     }
//     create(name){
//         return new EmployeeClass(name)
//     }
// }

function Vendor(name) {
    this.name = name;

    this.say = function () {
        console.log("I am vendor " + name);
    };
}

function VendorFactory() {

    this.create = function (name) {
        return new Vendor(name);
    };
}

function run(){
    let persons = [];
    let employeeFactory = new EmployeeFactoryClass();
    let vendorFactory =  new VendorFactory();

    persons.push(employeeFactory.create("Name 1"));
    persons.push(employeeFactory.create("Name 2"));
    persons.push(vendorFactory.create("Name 3"));
    persons.push(vendorFactory.create("Name 4"));


    for (var i = 0, len = persons.length; i < len; i++) {
        persons[i].say();
    }

}

run()
