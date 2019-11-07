## About

This warehouse integrates some basic react components, but I just copy the components and integrate a basic web front-end, so you need to have a look when you use it. Use 'webpack' as a build packaging tool, add 'sass', support' CSS', support * * ES6 * * syntax

## Using approach

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

