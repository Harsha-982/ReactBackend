const express = require('express')
const cors = require('cors');
const storageRouter=require('./modules/storage/route')

const app = express()
app.use(cors({ origin: '*' }));

app.use(express.json())
app.use('/api/v1',storageRouter)

app.listen(3001,()=>{
    console.log("started at port number 3001")
})