import Koa from 'koa'
import koaBodyParser from 'koa-bodyparser'
import json from 'koa-json'
import dotenv from 'dotenv'

// 路由
import routes from './controllers/index'
// logger
import { ConsoleLog } from './utils/logger'

const app = new Koa()
dotenv.config()

app
  .use(ConsoleLog())
  .use(json())
  .use(koaBodyParser())

// 路由
routes(app)

// 如果导入此文件则不启动服务
if (/app\.js$/.test(require.main.filename)) {
  app.listen(process.env.PORT, () => {
    console.log('http://127.0.0.1:3000')
  })
}

export default app
