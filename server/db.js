const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Anuj:3162@cluster0.j10qxpw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/admin')
.then(()=>{
    console.log('connected to mongoDB')
})
.catch((err)=>{
    console.error(err)
})

module.exports = mongoose;