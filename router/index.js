const router = require("koa-router")();
const home = require('./home');
const about = require('./about');

router.use(home.routes());
router.use('/about', about.routes());

module.exports = router;
