# [JS 基础: 对象引用和复制](https://zh.javascript.info/object-copy)

## 对象值引用

对象中的属性值, 记录的是一个内存地址

#### 通过以下案例理解对象值的引用

```js
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
```


## 克隆与合并，Object.assign

#### 语法:
> Object.assign(目标对象, 源对象...)

如果被拷贝的属性的属性名已经存在，那么它会被覆盖：

```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// 将 permissions1 和 permissions2 中的所有属性都拷贝到 user 中
Object.assign(user, permissions1, permissions2);

// 现在 user = { name: "John", canView: true, canEdit: true }
```

## 深层克隆

当克隆遇到嵌套对象的时候, 实际上还会出现对象引用的问题, 因此需要结合for循环来进行克隆
lodash 库的 _.cloneDeep(obj)。

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true，同一个对象

// user 和 clone 分享同一个 sizes
user.sizes.width++;       // 通过其中一个改变属性值
alert(clone.sizes.width); // 51，能从另外一个获取到变更后的结果
```