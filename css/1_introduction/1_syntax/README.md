# CSS 入门: 属性选择器

## 1. ID属性选择器

CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明

```css
#id_2 {
    color: burlywood;
}
```

## 2. Class 选择器

选中 class="a_1" 的元素

```css
p.a_1 {
    color: burlywood;
}
```

```html
<input class="a_1">
```

选中所有带**某个属性**的元素

```css
.center {
    color: burlywood;
}
```

# 样式表的引入

## 1. 外部样式表

> 再 <head> 标签内通过 <link> 标签引入外部 css 文件, 其中 rel="stylesheet" 是必须要声明的属性值

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>样式表的引入</title>
    <meta charset="UTF-8">
    <link href="css_syntax.css" rel="stylesheet">
</head>
<body>
</body>
</html>
```

## 2. 内部样式表

> 通过 style 标签, 在 html 文件内声明css样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>样式表的引入</title>
    <meta charset="UTF-8">
    <style>
        #id_2 {
            color: burlywood;
        }
    </style>
</head>
<body>
</body>
</html>
```

## 3. 内联样式表

> 每个元素都有style属性, 通过使用style元素对单据的标签进行样式设置

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>样式表的引入</title>
    <meta charset="UTF-8">
</head>
<body>
<p style="background-color: #c7254e">标签的style元素拥有所有的css属性,通过使用style元素对单据的标签进行样式设置</p>
</body>
</html>
```

## 4. 多重样式表

> 当一个元素有多种样式对其赋值的时候, 它会聚合各个样式的值
> 
> 优先级: 
> 
> （内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式

---

### [下一届: CSS 背景属性: background](../2_background/README.md)