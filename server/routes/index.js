const Router = require('express')
const router = new Router
const gameRouter = require('./gameRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')



router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/game', gameRouter)

module.exports = router