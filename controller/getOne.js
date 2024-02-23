const userEmploye = require("../model/employeModel");

async function getOne(req, res) {
  try {
    
    const id = req.params.id;
    const userExist = await userEmploye.findById({id});
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
module.exports = getOne;




