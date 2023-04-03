const Survey = require('mongoose').model('survey');
var ObjectID = require('mongodb').ObjectID;
var sanitize = require('mongo-sanitize');
var mongo = require('mongoose');
var Schema = mongo.Schema;
exports.create = async function(req, res, next) {
    var NewSchema = new Schema({
        title: {type: String},
        description: {type: String},
        questions: {type: Array}
    }, {versionKey:false});
    var newModel = mongo.model(req.body.title, NewSchema, 'survey');
    var newSurvey = new newModel(req.body);
    newSurvey.save(function(err, data){
        if(err){
            res.send(err)
        }else{
            res.send(data)
        }
    });

};

exports.edit = async function (req, res, next) {
    try {
      const id = sanitize(req.body._id);
      const updatedSurvey = await Survey.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedSurvey) {
        return res.status(404).send({ message: 'Survey not found' });
      }
      res.status(200).send(updatedSurvey);
    } catch (err) {
      return next(err);
    }
  };

  exports.list = async function (req, res, next) {
    try {
      const surveys = await Survey.find();
      res.status(200).send(surveys);
    } catch (err) {
      return next(err);
    }
  };

  exports.delete = async function (req, res, next) {
    try {
      const id = sanitize(req.body.id);
      const deletedSurvey = await Survey.findByIdAndDelete(id);
      if (!deletedSurvey) {
        return res.status(404).send({ message: 'Survey not found' });
      }
      res.status(200).send({ message: 'Survey deleted successfully' });
    } catch (err) {
      return next(err);
    }
  };