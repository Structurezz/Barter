

const express = require('express');
const router = express.Router();
const reportService = require('../services/reportService.js');

// GET /api/reports/transaction-history - Generate transaction history report
router.get('/transaction-history', async (req, res) => {
    try {
        const report = await reportService.generateTransactionHistoryReport();
        res.status(200).json(report);
    } catch (error) {
        console.error('Error generating transaction history report:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET /api/reports/account-statement - Generate account statement report
router.get('/account-statement', async (req, res) => {
    try {
        const report = await reportService.generateAccountStatement();
        res.status(200).json(report);
    } catch (error) {
        console.error('Error generating account statement report:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET /api/reports/analytics - Generate analytics report
router.get('/analytics', async (req, res) => {
    try {
        const report = await reportService.generateAnalyticsReport();
        res.status(200).json(report);
    } catch (error) {
        console.error('Error generating analytics report:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Implement other report-related routes as needed

module.exports = router;
