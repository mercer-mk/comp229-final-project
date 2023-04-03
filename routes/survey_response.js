const express = require('express');
const router = express.Router();
const surveyResponseController = require('../controllers/survey_response.controller');

router.post('/list/:survey_id', surveyResponseController.list);
router.post('/', surveyResponseController.create);
router.put('/:_id', surveyResponseController.edit);
router.delete('/delete', surveyResponseController.delete);

module.exports = router;
