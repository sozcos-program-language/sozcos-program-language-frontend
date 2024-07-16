# CSS 伪类: Pseudo-classes

### [CSS 伪类: Pseudo-classes](https://www.runoob.com/css/css-pseudo-classes.html)

### [什么是伪类](https://blog.csdn.net/qq_68299987/article/details/134085925)

---

CSS伪类是用来添加一些选择器的特殊效果。

伪类（Pseudo-class）是用于选择元素的特定状态或行为的关键词，它可以应用于已存在的元素。常见的伪类包括：hover（鼠标悬停状态）、active（鼠标点击状态）、focus（聚焦状态）、visited（已访问链接状态）等。伪类通过在选择器后面使用冒号和伪类名称来表示，例如：a:
hover、input:focus。

```css
/* 未访问的链接 */
a:link {
    color: #FF0000;
}

/* 已访问的链接 */
a:visited {
    color: #00FF00;
}

/* 鼠标划过链接 */
a:hover {
    color: #FF00FF;
}

/* 已选中的链接 */
a:active {
    color: #0000FF;
}

```

