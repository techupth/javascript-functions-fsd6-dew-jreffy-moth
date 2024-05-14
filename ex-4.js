// ให้เขียนโปรแกรมตามโจทย์ที่กำหนดดังนี้

// ให้ Declare ตัว Object ที่ชื่อ calculator เพื่อรวบรวมฟังก์ชันที่เขียนจาก Exercise #3 ให้อยู่ใน Object โดยที่

// Object calculator จะมี Key เป็น add และมีค่าเป็นฟังก์ชัน add
// Object calculator จะมี Key เป็น subtract และมีค่าเป็นฟังก์ชัน subtract
// Object calculator จะมี Key เป็น multiply และมีค่าเป็นฟังก์ชัน multiply
// Object calculator จะมี Key เป็น divide และมีค่าเป็นฟังก์ชัน divide
// ให้ Declare ตัว Variable ที่มีชื่อว่า addResult

// ให้ Assign ค่าของ addResult โดยที่มี Value เป็นผลลัพธ์จากการ Execute ของฟังก์ชัน add ที่อยู่ใน Object calculator
// ต่อไปให้กำหนด Parameter a เป็น 10 และ b เป็น 20
// ให้แสดงค่าของ addResult ออกมาดูทางหน้าจอด้วย console.log
// ให้ Declare ตัว Variable ที่มีชื่อว่า divideResult

// ให้ Assign ค่าของ divideResult โดยที่มี Value เป็นผลลัพธ์จากการ Execute ของฟังก์ชัน divide ที่อยู่ใน Object calculator
// ต่อไป ให้กำหนด Parameter a เป็น 3000 และ b เป็น 10
// ให้แสดงค่าของ divideResult ออกมาดูทางหน้าจอด้วย console.log


// Start coding here
let calculator = {
    add: (a,b) => a + b ,
    subtract: (a,b) => a - b ,
    multiply: (a,b) => a * b ,
    divide: (a,b) => a / b 
};

const addResult = calculator.add(10,20);
console.log(addResult);

const divideResult = calculator.divide(3000,10);
console.log(divideResult);