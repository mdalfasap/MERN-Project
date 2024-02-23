const userEmploye = require("../model/employeModel");

async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        await userEmploye.findByIdAndDelete({_id: id});
            res.status(200).json({ msg: "User deleted successfully" });
    } catch (error) {
                          
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
module.exports = deleteUser;