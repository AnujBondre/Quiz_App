const mongoose = require('mongoose');
const db = require('../db');


const Adminschema = new mongoose.Schema({
    Topic:{
        type:String,
        required:true
    },
    Question:{
        type:String,
        required:true,
    },
    Opt1:{
        type:String,
        required:true,
    },
    Opt2:{
        type:String,
        required:true,
    },
    Opt3:{
        type:String,
        required:true,
    },
    Opt4:{
        type:String,
        required:true,
    },
    Correct_opt:{
        type:String,
        required:true
    }
});

/// Model For Admin

const AdminModel = mongoose.model("Admin" ,Adminschema);

module.exports = AdminModel;
