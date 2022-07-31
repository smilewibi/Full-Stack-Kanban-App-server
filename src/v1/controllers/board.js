const Board = require('../models/board')
const Section = require('../models/section')
const Task = require('../models/task')

exports.create = async (req, res) => {
    try {
        const boardCount = await Board.find().count()
        const board = await Board.create({
            user: req.user._id,
            position: boardCount > 0 ? boardCount : 0
        })
        res.status(201).json(board)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.getAll = async (req, res) => {
    try {
        const board = await Board.find({user: req.user._id}).sort('-position')
        res.status(200).json(boards)
    } catch (err) {
        res.status(500).json(err)
    }
}