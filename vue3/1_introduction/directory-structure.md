# VUE 目录结构

```text
vue-project
    │   .eslintrc.cjs
    │   .gitignore      # 用来忽略被指定的文件或文件夹的改动
    │   index.html      # 页面项目的入口
    │   jsconfig.json       # 有关js的配置
    │   package-lock.json
    │   package.json        # 项目依赖配置和包管理文件
    │   README.md       # 项目说明文档
    │   vite.config.js
    │   
    ├───node_modules    # 项目依赖包
    ├───.vscode
    │       extensions.json
    │       settings.json
    │       
    ├───public      # 静态文件目录，里面的文件不会被 Webpack 处理，最终会原样复制到打包目录下。
    │       favicon.ico     # 网站图标
    │       
    └───src     # 项目开发主要文件夹
        │   App.vue     # 项目主组件，也是项目所有组件和路由的出口，之后它会被渲染到项目根目录的 index.html 中显示出来，我们可以在这里写一些适合全局的css样式
        │   main.js     # 入口文件，引入了vue模块和app.vue组件以及路由router，我们需要在全局使用的一些东西也可以定义在这里面
        │   
        ├───assets      # 静态资源存放文件夹，主要存放一些静态图片资源, src下的内容打包编译后会和public合并，public的内容不参与编译
        │       base.css
        │       logo.svg
        │       main.css
        │
        ├───components      # 公共组件存放文件夹，存放的是开发需要的的各种公共组件
        │   │   HelloWorld.vue
        │   │   TheWelcome.vue
        │   │   WelcomeItem.vue
        │   │
        │   └───icons
        │           IconCommunity.vue
        │           IconDocumentation.vue
        │           IconEcosystem.vue
        │           IconSupport.vue
        │           IconTooling.vue
        │
        ├───router      # 路由文件存放文件夹
        │       index.js        # 项目路由配置文件
        │
        ├───stores      # 状态管理文件存放文件夹
        │       counter.js      # VUEX的封装文件，用来设置通用变量和方法
        │
        └───views       # 项目中各模块主要功能的存放文件夹，一般在这里添加新功能
                AboutView.vue
                HomeView.vue
```

---
## 资料链接: 

[CSDN-vue3项目目录结构详解](https://www.runoob.com/vue3/vue3-directory-structure.html)