# CSS 动画

### [CSS 动画](https://www.runoob.com/cssref/css-animatable.html)

---

## 定义和用法

一些 CSS 属性是可以有动画效果的，这意味着它们可以用于动画和过渡。

动画属性可以逐渐地从一个值变化到另一个值，比如尺寸大小、数量、百分比和颜色。

---

### 背景颜色逐渐地从红色变化到蓝色：

```css
@keyframes mymove {
    from {
        background-color: red;
    }
    to {
        background-color: blue;
    }
}

/*Safari 和 Chrome:*/
@-webkit-keyframes mymove {
    from {
        background-color: red;
    }
    to {
        background-color: blue;
    }
}
```