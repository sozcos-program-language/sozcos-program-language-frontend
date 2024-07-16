# Css 单位: px/rem/em/vw/wh 的区别

### [Css单位px，rem，em，vw，vh的区别](https://www.cnblogs.com/theblogs/p/10516098.html)


## px

---

px就是pixel像素的缩写，相对长度单位，网页设计常用的基本单位。像素px是相对于显示器屏幕分辨率而言的

## em

---
em是相对长度单位。相对于当前对象内文本的字体尺寸（参考物是父元素的font-size）

如当前父元素的字体尺寸未设置，则相对于浏览器的默认字体尺寸

特点：

1. em的值并不是固定的；

2. em会继承父级元素的字体大小

 ## rem

---
rem是CSS3新增的一个相对单位，rem是相对于HTML根元素的字体大小（font-size）来计算的长度单位

如果你没有设置html的字体大小，就会以浏览器默认字体大小，一般是16px

## vm

css3新单位，相对于视口的宽度或高度中较小的那个

其中最小的那个被均分为100单位的vm

比如：浏览器高度900px，宽度1200px，取最小的浏览器高度，1 vm = 900px/100 = 9 px

缺点：兼容性差

## vh

vh是相对视口（viewport）的高度而定的，长度等于视口高度的1/100

假如浏览器的高度为500px，那么1vh就等于5px（500px/100）