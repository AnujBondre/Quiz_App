const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Jayantpatil:Jayant8806@quiz-app.vy1anz1.mongodb.net/Quiz-app').then(()=>{
    console.log("DataBase Connected Sucessful")
}).catch((err)=>{
    console.error(err)
})