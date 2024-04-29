const express = require('express');
const router = express.Router();
const AdminModel = require('../models/AdminModel');

// POST route to create a new question using AdminModel
router.post('/admin/addQues', async (req, res) => {
    try {
        const questionData = req.body;
        const newQuestion = new AdminModel(questionData);
        const savedQuestion = await newQuestion.save();
        res.status(201).json(savedQuestion);
    } catch (error) {
        console.error('Error creating question:', error);
        res.status(500).json({ message: 'Failed to create question' });
    }
});

// GET route to retrieve all admin entries
router.get('/admin', async (req, res) => {
    try {
        const adminData = await AdminModel.find({});
        res.status(200).json(adminData);
    } catch (error) {
        console.error('Error retrieving admin entries:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
