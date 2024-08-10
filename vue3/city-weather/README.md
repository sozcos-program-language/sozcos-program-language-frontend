# City Weather

- ### [【Vue3实战项目】使用 Vue3 和 Tailwind CSS 构建天气应用](https://www.bilibili.com/video/BV1514y1Y7hH?p=1&vd_source=b5c04f54b8a7ce0b4d5deef9989f7f9f)
- ### [图标库](https://fontawesome.com/icons)

---
### 创建项目

```shell
npm create vue@latest
```

### 安装 Tailwind CSS

```shell
npm install -D tailwindcss postcss autoprefixer
```

### 创建 Tailwind CSS 配置文件

```shell
npx tailwindcss init -p
```

### 修改 [tailwind.config.js](tailwind.config.js) 文件中的配置内容

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

### 创建 assets / [tailwind.css](src%2Fassets%2Ftailwind.css) 文件

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 再  [main.ts](src/main.ts) 中导入 tailwind.css 文件

```ts
import './assets/tailwind.css'
```

### 在 [tailwind.config.js](tailwind.config.js) 添加主题颜色

```js
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "weather-primary": "#00668A",
                "weather-secondary": "#004E71",
            }
        },
    },
    plugins: [],
}
```

### 在 index.html 中添加 [Roboto 字体](https://fonts.google.com/selection/embed)

```html

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
      rel="stylesheet">
```

### [tailwind.config.js](tailwind.config.js) 添加自定义容器选项

```js
container: {
    padding: "2rem",
    center: true
},
// 定义屏幕属性
screens: {
    sm: "640px", 
    md: "768px"
}
```

### 免费的字体库 [cdnjs](https://cdnjs.com/libraries/font-awesome)
```js
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
      integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
      crossorigin="anonymous" referrerpolicy="no-referrer"/>
```


