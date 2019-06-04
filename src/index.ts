import * as Koa from 'koa'
import * as bodyparser from 'koa-bodyparser'
import router from './controller'

const app = new Koa()

app.use(bodyparser())
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000)
