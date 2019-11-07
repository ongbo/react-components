## 关于

这个仓库作为构建React应用的脚手架仓库，避免繁琐无关的配置。使用`webpack`作为构建打包工具，添加`sass`,`css`支持，支持**ES6**语法

## 使用方法

假定项目用户名为`your-project-name`,使用`yarn`作为包管理工具,下面的

```bash
git clone https://github.com/ourfor/create-react-app.git your-project-name
cd your-project-name
yarn
```

如果`yarn`同步依赖比较慢，可以设置淘宝代理,执行下面👇命令即可:
```bash
yarn config set registry https://registry.npm.taobao.org
```
查看是否设置成功:
```bash
yarn config get registry
```

安装好依赖后，执行`yarn start`就可以看到页面了，如果需要添加中间件支持，执行`yarn server`即可。

