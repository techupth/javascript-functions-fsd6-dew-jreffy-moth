// ให้ Declare ฟังก์ชัน findMinNumber ในรูปแบบ Declaration ซึ่งมีคุณสมบัติต่อไปนี้
// ฟังก์ชัน findMinNumber รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
// ฟังก์ชัน findMinNumber จะ Return ผลลัพธ์ออกมาเป็นตัวเลขที่น้อยที่สุดเมื่อเทียบกันระหว่าง Parameter a หรือ b
// กำหนดให้ใช้ Built-in Function จาก Math ที่ JavaScript มีมาให้

// Start coding here
function findMinNumber(a,b){
    const result = Math.min(a,b) ;
    return result;
};

const minNumber = findMinNumber(10, 20);
console.log(minNumber); // 10
