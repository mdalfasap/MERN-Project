const express = require('express')
const router = express.Router()

const userSignUp = require('../controller/userSignUp')
const userSignin = require('../controller/userSiginIn')
const userProfile = require('../controller/userProfile')
const verifyToken = require('../middlewares/verifyToken')
const userRegister = require ("../controller/userRegister");
const getAll = require('../controller/gettAll')
const deleteUser =require('../controller/deleteUser')
const getOne = require("../controller/getOne")
const Update = require("../controller/update")

//router
router.post("/sign-up",userSignUp)
router.post("/sign-in",userSignin)
router.post("/user-details",verifyToken,userProfile)
router.post("/Add",verifyToken,userRegister)
router.get('/getall',verifyToken,getAll);
router.delete('/delete/:id', deleteUser);
router.get("/getone",verifyToken,getOne)
router.put("/update/:id",Update)
 
 




module.exports = router