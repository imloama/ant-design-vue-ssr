# ant design vue ssr 服务器渲染版

## master分支基于fastify
## koa分支基于koa2
## express分支基于express


### 提示timers错误
```
  手动删除 node_modules\ant-design-vue\es\v-calancer\src\Picker.js中的import { setTimeout } from 'timers' 这一行
```

### 运行说明
```
  npm run build:win
  node server.js
```