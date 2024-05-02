
// controllers/accountController.js
const Account = require('../models/Account');

exports.getAllAccounts = async (req, res) => {
    try {
        const accounts = await Account.find();
        res.json(accounts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.createAccount = async (req, res) => {
    try {
        const { accountNumber, balance, userId } = req.body;
        
        const newAccount = new Account({
            accountNumber,
            balance,
            userId
        });

        await newAccount.save();

        res.status(201).json(newAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAccountById = async (req, res) => {
    try {
        const { id } = req.params;

        const account = await Account.findById(id);

        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.json(account);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.updateAccount = async (req, res) => {
    try {
        const { id } = req.params;
        const { accountNumber, balance, userId } = req.body;

        const updatedAccount = await Account.findByIdAndUpdate(
            id,
            { accountNumber, balance, userId },
            { new: true }
        );

        if (!updatedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.json(updatedAccount);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.deleteAccount = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAccount = await Account.findByIdAndDelete(id);

        if (!deletedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }

        res.json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Implement other account-related functionalities as needed
