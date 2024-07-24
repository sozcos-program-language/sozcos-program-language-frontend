// 开启严格模式
"use strict"

let u1 = {age: 12, name: "elsen"}

console.log(u1.name); // elsen

// 复制对象

let u2 = u1

console.log(u2.name); // elsen

// 修改属性值
u2.name = 'pop';

console.log(u2.name); // pop
console.log(u1.name); // pop


/**
 * 深克隆: lodash.cloneDeep(obj)。
 */
let t1 = {
    age: 12,
    name: '哈哈哈',
    sub_u: {
        sa: 'sb',
        sb: 12,
    }
}
