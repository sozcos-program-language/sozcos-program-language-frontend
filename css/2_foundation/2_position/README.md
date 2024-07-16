# CSS 布局: Position 定位

### [CSS 布局: Position 定位](https://www.runoob.com/cssref/pr-class-position.html)

---

## static 定位

HTML 元素的默认值，即没有定位，遵循正常的文档流对象。

静态定位的元素不会受到 top, bottom, left, right影响。

```css
div.static {
    position: static;
    border: 3px solid #73AD21;
}
```

## fixed 定位

元素的位置相对于浏览器窗口是固定位置。

即使窗口是滚动的它也不会移动：

```css
p.pos_fixed {
    position: fixed;
    top: 30px;
    right: 5px;
}
```

## relative 定位

相对定位元素的定位是相对其正常位置。

```css
h2.pos_left {
    position: relative;
    left: -20px;
}

h2.pos_right {
    position: relative;
    left: 20px;
}
```

移动相对定位元素，但它原本所占的空间不会改变。

```css
h2.pos_top {
    position: relative;
    top: -50px;
}
```

## absolute 定位

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>:

```css
h2 {
    position: absolute;
    left: 100px;
    top: 150px;
}
```

## sticky 定位

不管页面滚动到何处, 粘贴定位的元素都会悬浮在置顶

```css
div.sticky {
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    background-color: green;
    border: 2px solid #4CAF50;
}
```

## 重叠的元素
元素的定位与文档流无关，所以它们可以覆盖页面上的其它元素

z-index属性指定了一个元素的堆叠顺序（哪个元素应该放在前面，或后面）

一个元素可以有正数或负数的堆叠顺序：
```css
img {
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
}
```