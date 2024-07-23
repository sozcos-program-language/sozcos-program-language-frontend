# JS 入门: 基本语法

### [教程地址](https://www.runoob.com/js/js-syntax.html)

---

## script 标签

> 在 html 内部编写 js 脚本

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Js 入门: 基础语法</title>
    <style>
        body {
            background-color: black;
            color: #3b3b4f;
        }
    </style>
    <script src="vocabulary.js">
        // 当一个 script 标签使用了src 属性, 那么它内部的脚本内容就不会再生效
        alert("我是弹窗")
    </script>
</head>
<body>
<script>
    alert("hello JavaScript");
</script>
</body>
</html>
```

## [变量](https://zh.javascript.info/variables)

### var, let: 

```js
// 变量使用 驼峰 命名规范
if (true) {
    // 声明全局变量: 代码块结束后依然可以访问
    var varTest = 12;
    // 声明局部变量: 代码块结束后补课访问
    let letTest = 123;
}

alert("声明变量var_test: " + varTest)
alert("声明变量let_test: " + letTest)
```

### 常量: const

```js
// 声明的变量称为“常量”。它们不能被修改，如果你尝试修改就会发现报错：
const CHANG_LIANG = 'ABC'
CHANG_LIANG = 12
```

## [数据类型](https://zh.javascript.info/types)

### bigint

通过在长数字后面 +n 来声明是 bigint 类型

```js
let maxNum = 92394234203492034283409273093842097420975049854n
alert(maxNum) // 9.239423420349203e+46
```


### string

反引号可通过占位符来动态拼接字符串

```js
let s1 = "1号";
let s2 = '2号';
let s3 = `3号, ${s2}, ${s1}`

alert(s3)
```