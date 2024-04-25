const express = require('express')
const app = express();
const PORT = 5000 ;

//Server started
app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})