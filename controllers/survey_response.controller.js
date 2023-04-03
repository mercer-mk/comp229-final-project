const SurveyResponse = require('mongoose').model('SurveyResponse');
const { ObjectID } = require('mongodb');

exports.create = async function (req, res, next) {
  try {
    const survey_response = new SurveyResponse(req.body);
    await survey_response.save();
    res.status(201).json({ _id: survey_response._id });
  } catch (err) {
    return next(err);
  }
};

exports.edit = async (req, res, next) => {
  try {
    const survey_response = await SurveyResponse.findOneAndUpdate(
      { _id: ObjectID(req.params._id) },
      req.body,
      { new: true }
    );
    res.status(204).send(survey_response);
  } catch (err) {
    return next(err);
  }
};

exports.list = async function (req, res, next) {
  try {
    const survey_responses = await SurveyResponse.find({
      survey_id: ObjectID(req.params.survey_id),
    });
    res.status(200).json(survey_responses);
  } catch (err) {
    return next(err);
  }
};

exports.delete = async function (req, res, next) {
  try {
    const result = await SurveyResponse.deleteOne({
      _id: ObjectID(req.params._id),
    });
    res.status(200).json(result);
  } catch (err) {
    return next(err);
  }
};
