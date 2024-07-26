# [CSS 属性手册](https://developer.mozilla.org/zh-CN/docs/Web/CSS)

- ## transform 旋转

```css
/*顺时针旋转 10 度*/
a {
    transform: rotate(20deg);
}

/*逆时针旋转 10 度*/
a {
    transform: rotate(-20deg);
} 
```

---

- ## [box-sizing]

[告诉浏览器如何计算一个元素的总宽度和总高度](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

当一个元素的宽度是100, 那么它声明宽度的时候可能把父元素的宽度也加上去

```css
* {
    box-sizing: border-box
}
```

border-box 告诉浏览器：你想要设置的边框和内边距的值是包含在 width 内的。也就是说，如果你将一个元素的 width 设为 100px，那么这
100px 会包含它的 border 和 padding，内容区的实际宽度是 width 减去 (border + padding) 的值。大多数情况下，这使得我们更容易地设定一个元素的宽高。

---

- ## [display](https://developer.mozilla.org/zh-CN/docs/Web/CSS/display)

CSS display 属性设置元素是否被视为块级或行级盒子以及用于子元素的布局，例如流式布局、网格布局或弹性布局。

```html

<body>
<div class="label">
    <p class="bold">Serving size <span>2/3 cup (55g)</span></p>
</div>
</body>
```

```css
img {
    /*行排列*/
    display: flex;
    flex-direction: row;
}
```

---

- ## flex-direction

---

- ## flex-wrap

当 flex 容器太小时元素的排列方式。

---

- ## justify-content

属性决定了 flex 容器中的项目如何沿主轴对齐，从而影响它们的位置和周围的空间。

- ## object-fit

保持纵横比

- ## border-radius

圆角

- ## ::after

在某个元素之后插入一个空白元素

```css
.gallery::after {
    content: "";
    width: 350px;
}
```

- ## [font-weight](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-weight)

字体加粗

```css
h1 {
    font-weight: 800;
}
```

- ## text-align

字体对齐

```css
h1 {
    text-align: center;
}
```

- ## letter-spacing

字间距

```css
h1 {
    letter-spacing: 0.15px;
}
```

---

- ## [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)

CSS justify-content 属性定义浏览器如何沿着弹性容器的主轴和网格容器的行向轴分配内容元素之间和周围的空间

```css
p {
    justify-content: space-between;
}
```

---

- ## [align-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items)

CSS align-items 属性设置了所有直接子元素的 align-self 值作为一个组。在 Flexbox 中，它控制子元素在交叉轴上的对齐。在 Grid
布局中，它控制了子元素在其网格区域内的块向轴上的对齐。

```css
p {
    display: flex;
    justify-content: space-between;
    /*只在 flex 布局中使用，将元素与 flex 容器的主轴末端或交叉轴末端对齐。*/
    align-items: flex-end;
}
```

[box-sizing]: https://www.freecodecamp.org/chinese/learn/2022/responsive-web-design/learn-css-flexbox-by-building-a-photo-gallery/step-8