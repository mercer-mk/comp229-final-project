const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/survey.controller');

router.get('/', surveyController.list);
router.post('/create', surveyController.create);
router.post('/update', surveyController.edit);
router.delete('/delete', surveyController.delete);

module.exports = router;
