/**
 * while
 */
// let i = 0;
// while (i < 4) {
//     alert(i)
//     i++;
// }


/**
 * for循环
 */
// for (i = 0; i < 3; i++) {
//     alert(i)
// }
//
// for (; j < 3; j++) {
//     alert(j)
// }
//
// for (; t < 3;) {
//     alert(t)
// }


/**
 * 跳出循环
 */
let c1 = 0
let sum = 0;// 声明初始值, 是正常累加
// let sum; // 没有初始值, 最终是一个 NaN
while (c1 < 3) {
    let value = +prompt("Enter a number", '');

    if (!value) break; // 当用户输入空的时候跳出循环

    sum += value;
}
alert('Sum: ' + sum);