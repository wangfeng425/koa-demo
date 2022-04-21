const router = require("koa-router")();

router.get('/init/:text', async ctx => {
  console.log(ctx.params)
  console.log(ctx.query);
  console.log(ctx.querystring)
  ctx.body = 'about init'
})

module.exports = router;