const express = require('express')
const app = express();
const PORT = 5000 ;
const routes = require('./routes/Adminroutes')


// Mount the routes at a specific path
app.use('/api', routes); 

//Server started
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})