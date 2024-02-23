const userEmploye = require("../model/employeModel");

async function update(req, res) {
  
    try {
        const id = req.params.id;
        
        const updatedData = await userEmploye.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "User updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}

module.exports=update;
