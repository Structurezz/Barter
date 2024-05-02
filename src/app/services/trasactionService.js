// services/transactionService.js
const Transaction = require('../models/Transaction');

class TransactionService {
    async createTransaction(transactionData) {
        try {
            const newTransaction = new Transaction(transactionData);
            await newTransaction.save();
            return newTransaction;
        } catch (error) {
            throw new Error(`Error creating transaction: ${error.message}`);
        }
    }

    async getTransactionById(transactionId) {
        try {
            return await Transaction.findById(transactionId);
        } catch (error) {
            throw new Error(`Error fetching transaction by ID: ${error.message}`);
        }
    }

    async updateTransaction(transactionId, transactionData) {
        try {
            return await Transaction.findByIdAndUpdate(transactionId, transactionData, { new: true });
        } catch (error) {
            throw new Error(`Error updating transaction: ${error.message}`);
        }
    }

    async deleteTransaction(transactionId) {
        try {
            return await Transaction.findByIdAndDelete(transactionId);
        } catch (error) {
            throw new Error(`Error deleting transaction: ${error.message}`);
        }
    }

    // Add other transaction-related methods as needed
}

module.exports = new TransactionService();
