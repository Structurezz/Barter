

const express = require('express');
const router = express.Router();
const transactionService = require('../services/transactionService.js');

// GET /api/transactions - Get all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await transactionService.getAllTransactions();
        res.status(200).json(transactions);
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// POST /api/transactions - Create a new transaction
router.post('/', async (req, res) => {
    try {
        const newTransaction = req.body;
        await transactionService.createTransaction(newTransaction);
        res.status(201).json({ message: 'Transaction created successfully' });
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET /api/transactions/:id - Get transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await transactionService.getTransactionById(id);
        res.status(200).json(transaction);
    } catch (error) {
        console.error('Error fetching transaction by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Implement other transaction-related routes as needed (update, delete, etc.)

module.exports = router;
