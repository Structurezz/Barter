// controllers/tradeController.js
const Trade = require('../models/Trade');

exports.getAllTrades = async (req, res) => {
    try {
        const trades = await Trade.find();
        res.json(trades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getTradeById = async (req, res) => {
    try {
        const trade = await Trade.findById(req.params.id);
        if (!trade) {
            return res.status(404).json({ message: 'Trade not found' });
        }
        res.json(trade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Implement other CRUD operations (create, update, delete) as needed
