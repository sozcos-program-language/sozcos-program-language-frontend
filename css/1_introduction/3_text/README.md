# CSS 文本属性: text

## 1. 文本的对齐方式

```css
legend {
    text-align: left;
}
```

## 2. 文本修饰

```css
a {
    color: orange;
    text-decoration: none;
}

a.a_2 {
    text-decoration: overline;
}

a.a_3 {
    text-decoration: line-through;
}

a.a_4 {
    text-decoration: underline;
}
```

```html

<fieldset>
    <legend>文本修饰</legend>
    <p>text-decoration: 设置或删除文本的装饰, 例如删除链接的下划线</p>
    <p><a class="a_1" href="http://www.baidu.com">我是1号超链接</a></p>
    <p><a class="a_2" href="http://www.baidu.com">我是2号超链接</a></p>
    <p><a class="a_3" href="http://www.baidu.com">我是3号超链接</a></p>
    <p><a class="a_4" href="http://www.baidu.com">我是3号超链接</a></p>
</fieldset>
```

---

### [上一届: CSS 背景属性: background](../2_background/README.md)