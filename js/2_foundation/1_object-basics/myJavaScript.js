// 开启严格模式
"use strict"

/**
 * 声明一个对象
 */
let u1 = new Object();
let u2 = {}

console.log(u1, u2)

let u3 = {
    name: '小明',
    age: 18,
};
console.log(u3.name, u3.age)



/**
 * 适用 delete 一处所有属性
 */
delete u3.age
console.log(u3.name, u3.age)


/**
 * 检查属性是否存在
 */
console.log("age" in u3);
console.log("name" in u3);

/**
 * 便利所有key
 */
for (let u3Key in u3) {
    console.log(u3Key);
}