module.exports = app => {
    let pokemon = require("../controllers/pokemon.controller.js");
    let router  = require("express").Router();
    
    router.get("/", pokemon.getAll);

    app.use('/api/pokemon', router);
  };