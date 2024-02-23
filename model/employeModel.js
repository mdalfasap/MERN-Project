const  mongoose  =  require ("mongoose");


const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
   
},{
    timestamps : true
})


 const userEmploye = mongoose.model("Employe", userSchema);

 module.exports = userEmploye;