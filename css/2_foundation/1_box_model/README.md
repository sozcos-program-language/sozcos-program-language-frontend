# CSS 布局: 盒子模型

一个元素即是一个盒子, 这个盒子是由以下几部分组成的:

- Margin(外边距) - 清除边框外的区域，外边距是透明的。
- Border(边框) - 围绕在内边距和内容外的边框。
- Padding(内边距) - 清除内容周围的区域，内边距是透明的。
- Content(内容) - 盒子的内容，显示文本和图像。

![](https://www.runoob.com/images/box-model.gif)
<img src="https://cdn.freecodecamp.org/curriculum/css-box-model/diagram-3.png">
```css
div {
    width: 300px;
    border: 25px solid green;
    padding: 25px;
    margin: 25px;
}
```
