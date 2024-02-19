const express = require('express');
const mongoDB = require('./db');
const cors = require('cors')
mongoDB();


const app = express()
const port = 8000



//to eliminate the CORS problem 
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type , Accept"
//     );
//     next();
// })
app.use(cors())
app.use(express.json()); //middleware
app.use('/api', require("./Routes/CreateUser"))
app.use('/api', require("./Routes/DisplayData"))
app.use('/api', require("./Routes/OrderData"))
app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
}) 