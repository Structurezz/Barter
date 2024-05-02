
// controllers/transactionController.js
const Transaction = require('../models/Transaction');

exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createTransaction = async (req, res) => {
    try {
        const { amount, type, description } = req.body;
        const newTransaction = new Transaction({ amount, type, description });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Implement other transaction-related functionalities (update, delete, etc.) as needed
