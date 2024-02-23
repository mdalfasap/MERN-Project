const userEmploye = require("../model/employeModel");

async function getAll(req, res) {
    try {
        console.log(req.userId,"sldfjhasdkjfhaksjdfhkajsh");
        const user = await userEmploye.find({userId:req.userId})
        console.log(user,"userererererer");
        if (user.length === 0) {
            return res.status(404).json({ msg: "User data not found" });
        } else { 
            return res.status(200).json(user);
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: error.message });
    }
}

module.exports = getAll;
