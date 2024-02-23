const userEmploye = require("../model/employeModel");

async function userRegister(req, res) {
    try {
        let {
            fname,
            lname,
            email,
            password,
        } = req.body;

        // Check if user with the provided email already exists
        const findUser = await userEmploye.findOne({ email });
        console.log(findUser, "findUser");

        if (findUser) {
            return res.status(404).json({
                msg: "User Already Exists",
                error: true,
                success: false,
            });
        } else {
            console.log(req.userId,"req.userIdreq.userIdreq.userIdreq.userIdreq.userIdreq.userId");
            const userData = new userEmploye({ fname, lname, email, password,userId:req.userId });

            await userData.save();
           
             console.log(userData,"userDatauserDatauserDatauserData") 
            return res.status(200).json({
                error: false,
                success: true,
                msg: "User created successfully",
            
            });
        }
    } catch (error) {
        console.error(error, "errorerrorerrorerrorerrorerror");
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = userRegister;
