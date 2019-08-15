const Quizes = require("../models/quizes");

// Defining methods for the quizesController
module.exports = {
  findAll: function(req, res) {
    Quizes
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    Quizes
      .findById(req.params.id)
      .then(dbModel =>{ 
        return res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
      
  },
  create: function(req, res) {
    Quizes
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Quizes
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Quizes
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};