/**
 * 函数表达式
 */
// let sayHi = function() { // (1) 创建
//     alert( "Hello" );
// };
// let func = sayHi;

/**
 * 箭头函数
 * 语法: let func = (arg1, arg2, ..., argN) => expression;
 */
// let func = (a, b, c, s) => a + b + c + s
//
// alert(func(1, 2, 3, 4))
//
// // 同等于
// let func = function(arg1, arg2, argN) {
//     return expression;
// };


/**
 * 多行箭头函数
 */
let sum = (a, b) => {  // 花括号表示开始一个多行函数
    let result = a + b;
    return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert(sum(1, 2)); // 3