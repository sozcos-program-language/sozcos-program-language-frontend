# VUE3

### [内置指令列表](https://cn.vuejs.org/api/built-in-directives.html)

### 

### 使用 vite 创建vue项目
```shell
npm init vite@latest <project name> -- --template vue
```

### [安装 Element Plus UI库](https://s-test.belle.cn/zh-CN/guide/design.html)
```shell
npm install element-plus --save
```


### [引入 windicss](https://windicss.org/integrations/vite.html)

#### 安装
```shell
npm i -D vite-plugin-windicss windicss
```

#### 在配置文件 vite.config.js 中引入
```typescript
import WindiCSS from 'vite-plugin-windicss'
```

#### 添加到项目插件库
```typescript
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```