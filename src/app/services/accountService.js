// services/accountService.js
const Account = require('../models/Account');
const Transaction = require('../models/Transaction');

class AccountService {
    async getAccountByUserId(userId) {
        try {
            return await Account.findOne({ userId });
        } catch (error) {
            throw new Error(`Error fetching account by user ID: ${error.message}`);
        }
    }

    async getAccountTransactions(accountId) {
        try {
            return await Transaction.find({ accountId });
        } catch (error) {
            throw new Error(`Error fetching account transactions: ${error.message}`);
        }
    }

    async getAccountStatement(accountId, startDate, endDate) {
        try {
            return await Transaction.find({ accountId, createdAt: { $gte: startDate, $lte: endDate } });
        } catch (error) {
            throw new Error(`Error generating account statement: ${error.message}`);
        }
    }

    // Add other account-related methods as needed
}

module.exports = new AccountService();
