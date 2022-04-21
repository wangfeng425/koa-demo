const router = require("koa-router")();
const DB = require('./../db/model/user')
router.get('/home', async ctx => {
  //ctx.body = 'home'
  DB.find().then((res, err) => {
    ctx.body = {code: 10000, data: res, msg: 'success'}
  })
})
module.exports = router;