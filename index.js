const koa = require("koa");
const static = require("koa-static");
const router = require('./router/index')
const path = require("path");
// const db = require('./db/connect')
const app = new koa();


app.use(static(path.join(__dirname, "./views"), { index: false, hidden: false, defer: true, extensions: ['html'] }));
app.use(router.routes()).use(router.allowedMethods())

app.use( ctx => {
  ctx.state.agent = ctx.request.header['user-agent']
  console.log(ctx.request.header['user-agent'])
})

app.listen(4000, () => {
  console.log("server up")
})