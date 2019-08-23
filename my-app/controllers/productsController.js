const db = require("../models/products");
const Op = db.Sequelize.Op;


module.exports = function (app) {


  app.get("/api/products", function (req, res) {
    var query = {};
    if (req.query.id) {
      query.id = req.query.id;
    }
    if (req.query.category) {
      query.category = req.query.category;
    }


    db.findAll({

      where: query,
      include: [db.id, db.category],
    }).then(function (db) {
      res.json(db);
    });
  });


  app.get("/api/products/category", function (req, res) {
    db, findAll({
      where: {
        category: req.params.category
      },
      include: [db.id, db.category]
    }).then(function (db) {
      res.json(db)
    });
  });

  app.get("/api/products/:id", function (req, res) {

    db.findOne({
      where: {
        id: req.params.id
      },
      include: [db.id, db.category]
    }).then(function (db) {
      res.json(db);
    });
  });



  app.post("/api/products", function (req, res) {
    db.create(req.body).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });


  app.delete("/api/products/:id", function (req, res) {
    db.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (db) {
      res.json(db);
    });
  });

};