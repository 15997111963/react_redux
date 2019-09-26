## 基于react 16.9.0 react-redux react-router less 构建的基本结构

> 个人默认喜欢用BrowserRouter history模式 可能某些场景需要服务端支持和Nginx的一些location配置

- 习惯了函数体的组件 默认用的是`hook`做的演示 class组件初始构建繁琐 可以自行替换
- 这里没有吧`axios`或是`fetch`等请求库的二次封装写进去 考虑到不同项目对于拦截器业务的处理 还有各种header 重连机制等等的不同 就不善做主张放进去了
- 写这个的目的是为了能够快速的开始下一个项目 最近项目有点多 靠copy还需要删原来的代码 故专门搭了一遍
- 对actions也简单进行了模块划分对于构建可以参考store文件夹和root的index.js文件
- 对于用法 我做了一个基本的演示 都在homepage首页组件里(也许我的演示纯属多余 但希望你别介意)
- `store`文件夹下的user模块里 有对应user的state 还有突变方法 可以仿照套用 actions也同理
- 关于css预编译我一直习惯用的less 主题定制配置 需要你自己去做了 如果你也用less的话 当然如果你用scss/sass/stylus等 你需要自己改webpackconfig的配置 上面有我配好的less的 可以自行举一反三
- @的目录默认也是配到src下的 项目结构比较基础 需要自行拓展 page是router里配置的根页面 有子组件都在components里 就不一一多说了

**后续会对各项配置进一步的补全 如果有issues 欢迎提出 我会跟进解决**