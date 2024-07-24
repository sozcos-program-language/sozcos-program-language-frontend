"use strict"

/**
 * 给对象声明一个方法属性
 */
// 这些对象作用一样

user = {
    sayHi: function () {
        alert("Hello");
    }
};

// 方法简写看起来更好，对吧？
let user = {
    sayHi() { // 与 "sayHi: function(){...}" 一样
        alert("Hello");
    }
};