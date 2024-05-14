const {Basket} = require('../models/models')
const {BasketGame} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async create(req, res) {
        const {gameId} = req.body
        const basketGame = await BasketGame.create({gameId})
        return res.json(basketGame)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

}

module.exports = new BrandController()