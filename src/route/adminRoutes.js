
const express = require('express');
const router = express.Router();
const adminService = require('../services/adminService.js');

// GET /api/admin/users - Manage users (CRUD operations)
router.get('/users', async (req, res) => {
    try {
        const users = await adminService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error managing users:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET /api/admin/settings - Manage system settings
router.get('/settings', async (req, res) => {
    try {
        const settings = await adminService.getSystemSettings();
        res.status(200).json(settings);
    } catch (error) {
        console.error('Error managing system settings:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET /api/admin/logs - View audit logs
router.get('/logs', async (req, res) => {
    try {
        const logs = await adminService.viewAuditLogs();
        res.status(200).json(logs);
    } catch (error) {
        console.error('Error viewing audit logs:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Implement other admin-related routes as needed

module.exports = router;
