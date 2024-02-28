const {Game, GameInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const { where } = require('sequelize')

class GameController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const game = await Game.create({name, price, brandId, typeId, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i => {
                    GameInfo.create({
                        title: i.title,
                        description: i.description,
                        gameId: game.id,
                    })
                })
            }

            return res.json(game)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {typeId, brandId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let games;
        if (!typeId && !brandId) {
            games = await Game.findAndCountAll({limit, offset})
        }
        if (typeId && !brandId) {   
            games = await Game.findAndCountAll({where: {typeId}, limit, offset})
        }
        if (!typeId && brandId) {
            games = await Game.findAndCountAll({where: {brandId}, limit, offset})
        }
        if (typeId && brandId) {
            games = await Game.findAndCountAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(games)
    }

    async getOne(req, res) {
        const {id} = req.params
        const game = await Game.findOne(
            {
                where: {id},
                include: [{model: GameInfo, as: 'info'}]
            },
        )
        
        return res.json(game)
    }

}

module.exports = new GameController()