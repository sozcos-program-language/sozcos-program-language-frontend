// 通过引入js脚本的方式
alert("我是外部js脚本");

// 变量使用 驼峰 命名规范
if (true) {
    // 声明全局变量: 代码块结束后依然可以访问
    var varTest = 12;
    // 声明局部变量: 代码块结束后补课访问
    let letTest = 123;
}

alert("声明变量var_test: " + varTest)
// alert("声明变量let_test: " + letTest)

/*
    常量: 声明的变量称为“常量”。它们不能被修改，如果你尝试修改就会发现报错：
 */
const CHANG_LIANG = 'ABC'
// CHANG_LIANG = 12


/*
数据类型
 */
// 数据类型: bigint, 通过在长数字后面 +n 来声明是 bigint 类型
// let maxNum = 92394234203492034283409273093842097420975049854
let maxNum = 92394234203492034283409273093842097420975049854n
alert(maxNum) // 9.239423420349203e+46


// string
let s1 = "1号";
let s2 = '2号';
let s3 = `3号, ${s2}, ${s1}`

// 反引号可通过占位符来动态拼接字符串
alert(s3)