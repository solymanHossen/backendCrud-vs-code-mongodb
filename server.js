const express=require('express');
const errorHandlebar = require('./middleware/errorHandle');
const connectDb = require('./config/dbConnection');

connectDb();

const app=express();

const port=process.env.PORT || 5000;

app.use(express.json())


app.use('/api/contacts',require('./routes/contactRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use(errorHandlebar)

app.listen(port,()=>{
    console.log(`server runing on port ${port}`);
})

