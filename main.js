"use strict";

// ==================== 1-picture ====================

// ==================== 1-problem ====================

// let array = [3, 2, 4]; // 7   [0,2]
// let sum = 7;
// let num = [];
// for (let i = 0; i < array.length; i++) {
//   for (let j = 1; j < array.length; j++) {
//     if (array[j] + array[i] === sum) {
//      num.push(i,j)
//     }else{
//     }
//   }
// }
// console.log(num)

// let arrays = [5, 2, 11, 3]; // 18 [2,3]
// let sum = 14;
// let num = [];
// for (let i = 0; i < arrays.length; i++) {
//   for (let j = 1; j < arrays.length; j++) {
//     if ( sum === arrays[j] + arrays[i] ) {
//       num.push(i, j);
//     }
//   }
// }
// console.log(num);

// ==================== 2-problem ====================



// ==================== 3-problem ====================
// 
// let array=('olcha, olma, banan, uzum, shaftoli, nok')
// let num=[]

// let width=array.split("")

// width.reverse()
// for(let key in width){
   
//   num+=(width[key])

// }
// console.log(num)


// ==================== 2-picture ====================

// ==================== 1-problem ====================
// window.alert("ikki xonali sonlar uchun!");

// let num = +prompt("son kiriting: ");
// let sum = 0;
// if (num > 0) {
//   sum += Math.floor(num / 10) + Math.floor(num % 10) * 10;
//   console.log(sum);
// } else {
//   sum += Math.ceil(num / 10) + Math.floor(num % 10) * 10;
//   console.log(sum);
// }

// uch xonali sonlar uchun
// sum+=(Math.floor(num / 100))+(Math.floor((num % 100) / 10)*10)+(Math.floor((num % 100) % 10)*100 )
// sum+=(Math.ceil(num / 100))+(Math.floor((num % 100) / 10)*10)+(Math.floor((num % 100) % 10)*100 )

// ==================== 2-problem ====================

// let array = [1, 2, 3, 4, 0, 5, 6, 7, 8, 9];
// let num = 0;
// for (let key in array) {
//   if (array[key] == num) {
//     let hand = array.splice(key, 1);
//     array.push(hand);
//   } else {
//     console.log();
//   }
// }
// console.log(array);


// ==================== 3-picture ====================

// window.alert("uch xonali sonlar uchun!")

// let num = +prompt("son kirit: ");
// let sum=0;
// sum+=(Math.floor(num / 100))+(Math.floor((num % 100) / 10))+(Math.floor((num % 100) % 10));
// console.log(sum)
