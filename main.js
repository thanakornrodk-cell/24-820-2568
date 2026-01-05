//1.)

let a = 10
let b = 20
let c = 30

let ages = [10 , 20, 30 ] // array 3 items ตำเเหน่ง 0,1,2
console.log('ages:', ages)
comsole.log('ages[1]:', ages[1])

//1. เเทนที่ ค่าข้อมูลใน array
ages = [15,25]
console.log('ages list:', ages)

//2. ต่อ ท้าย ข้อมูลใน array
ages.push(35)
console.log('ages after push:', ages)

//3. เอา ข้อมูลตัวสุดท้าย ออก
ages.pop()
console.log('ages after pop:', ages)








//2.)

let ages = [25, 30, 35, 40, 45];
console.log('Ages:', ages);

let fruits = ['apple', 'banana', 'cherry'];
console.log('Fruits:', fruits);
fruits.push('mango');
console.log('Fruits after push:', fruits);
console.log('First fruit:', fruits.length)

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}:`, fruits[i]);
}









//3.)

let student = [{
    age: 30,
    name: 'John',
    grade: "A"
}, {
    age: 25,
    name: 'Jane',
    grade: "B"
}]
for (let i = 0; i < student.length; i++) {

console.log(student[i]);
console.log('name', student[i].name);
console.log('age', student[i].age);
console.log('grade', student[i].grade);
}

student1.push({
    age: 28,
    name: 'mike',
    grade: "C"
});
console.log("Added new student:",student[student.length - 1]);

student.pop();
console.log("Removed last student:",student);







//4.)
/*
function
*/

let score1 = 10
let score2 = 80

function calculation_grade(score){ 
    let grade;

if (score >= 80){
    grade = 'A'
} else if (score >= 70){
    grade = 'B'
} else if (score >= 60){
    grade = 'C'
} else if (score >= 50){
    grade = 'D'
} else {
    grade = 'F'
}
return grade
}
//  เรียกใช้งานฟังก์ชัน calculation_grade เพื่อหาค่าเกรดจากคะเเนนที่กำหนด
let grade1 = calculation_grade(score1)
let grade2 = calculation_grade(score2)
console.log('Score1: ' + score1 + ', Grade: ' + grade1)





//5.)
/*
array
*/

let scores = [90,80,70,60,50];

for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i+1}: ${scores[i]}`);
}
/*
scores[0] = scores[0] *2
scores[1] = scores[1] *2
scores[2] = scores[2] *2
scores[3] = scores[3] *2
scores[4] = scores[4] *2
*/
scores = scores.map((s) => {
    return s * 2
})

scores.forEach((s)=> {
console.log('Score:', s);
})

// map, filter









//5.1)
/*
array
*/

let scores = [90,80,70,60,50];
for (let i = 0; i < scores.length; i++) {
console.log(scores[i]);
    }


let newScores = scores.filter(function(score) {
    if (score >= 60) {
        return true;
    } else {
        return false;
    }
})

newScores.forEach((ns) => {
    console.log('new score: ' + ns);
})






//6)
/*
object funtions
*/

let student = [
    {name: "Jhon", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Jim", age: 21, grade: "C"}
]  
console.log('student:', student[0]);

let student = students.find((s) =>{
   return s.name === "Jane";
})

let dubblescoreStudents = students.map((s) => {
    s.age = s.age * 2;
    return s;
});

let highGradeStudents = students.filter((s) => {
    return s.grade === "A";
});

console.log('Student ',student)
console.log('Dubble Score Students:', dubblescoreStudents);
console.log('High Grade Students:', highGradeStudents);







