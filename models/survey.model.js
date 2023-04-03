const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: {
    type: Array, required: true}
});

mongoose.model('survey', surveySchema,'survey');

