const mongoose = require('mongoose');
const { ObjectID } = require('mongodb');

const SurveyResponseSchema = mongoose.Schema({
    survey_id: {
        type: ObjectID,
        required: true
    },
    survey_response: {
        type: Array,
        required: true
    }
});

mongoose.model('SurveyResponse', SurveyResponseSchema);