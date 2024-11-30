const student = {
    name: "Daniel Wang",          
    age: 35,                  
    enrolled: true,            
    courses: ["Javascript", "algorithm", "operation system"], 


    displayInfo: function() {
        return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log(student.displayInfo());

const studentJSON = JSON.stringify(student); 
console.log("JSON String:", studentJSON);