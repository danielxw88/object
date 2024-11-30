const student = {
    name: "Daniel Wang",          
    age: 35,                  
    enrolled: true,            
    courses: ["Javascript", "algorithm", "operation system"], 
    addCourse: function (newCourse) {
        this.courses.push(newCourse);
        console.log(`Course "${newCourse}" added successfully.`);
    },
    getTotalCourses: function () {
        return this.courses.length;
    },
}


    displayInfo: function() {
        return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
     
};

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log(student.displayInfo());

const studentJSON = JSON.stringify(student); 
console.log("JSON String:", studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log("Converted Object:", studentObject);

console.log("Original Object:", student);
console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(studentObject));

const { name, courses } = student;
console.log("Student Name:", name);
console.log("Courses:", courses);

const scores = [60, 92, 78, 88];


const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);

const clonedStudent = { ...student, graduationYear: 2025 };
console.log("Cloned Student with New Property:", clonedStudent);


const newCourses = ["webpage", "database"];
const combinedCourses = [...student.courses, ...newCourses];
console.log("Combined Courses:", combinedCourses);

student.addCourse("technical writting");


console.log("Updated Courses:", student.courses);


const totalCourses = student.getTotalCourses();
console.log("Total Number of Courses:", totalCourses);