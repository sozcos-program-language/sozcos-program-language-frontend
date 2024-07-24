// 类型转换

/**
 * 字符串转换
 */
let value = true
// alert(`当前数据类型: ${typeof value}`)

value = String(value)
// alert(`转换后数据: ${value}`)


/**
 * 数字类型转换
 */
let str = "123";
// alert(typeof str); // string

let num = Number(str); // 变成 number 类型 123
// alert(typeof num); // number


/**
 * 布尔值转换
 */
// alert( Boolean(1) ); // true
// alert( Boolean(0) ); // false
//
// alert( Boolean("hello") ); // true
// alert( Boolean("") ); // false