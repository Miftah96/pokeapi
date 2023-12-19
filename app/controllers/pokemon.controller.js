const log      = 'Pokemon controller'
const service  = 'Pokemon'
const Pokemon  = require("../config/api.js");
const res      = require("../utils/response.helper.js");

exports.getAll = async (req, res) => {
    try{
        // res.json('Hello')
        const response = await Pokemon.findAll()
        res.json(response);
    }catch {
        res.status(500).send({
          message:
            "Some error occurred while retrieving Activitys."
        });
    }
  }