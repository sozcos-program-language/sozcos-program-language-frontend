# CSS3 转换属性:  transition

### [CSS3 转换属性:  transition](https://www.runoob.com/cssref/css3-pr-transition.html)

---

## 语法

```css
transition: property duration timing-function delay
```

- transition-property 指定CSS属性的name，transition效果
- transition-duration transition效果需要指定多少秒或毫秒才能完成
- transition-timing-function 指定transition效果的转速曲线
- transition-delay 定义transition效果开始的时候

```css
/* 对所有属性都应用过渡效果 */
.element {
    transition: all 0.3s ease;
}

/* 对指定属性（颜色）应用过渡效果 */
.element {
    transition: color 0.3s ease-in-out;
}
```

```css
div {
    width: 100px;
    transition: width 2s;
    -webkit-transition: width 2s; /* Safari */
}

div:hover {
    width: 300px;
}
```