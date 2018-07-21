import Router from 'koa-router'

export default (app) => {
  const index = new Router()
  index.post('/', (ctx) => {
    ctx.body = ctx.request.body
  })

  app.use(index.routes())
}
