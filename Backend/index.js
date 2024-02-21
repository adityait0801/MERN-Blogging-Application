const express = require('express')

const app = express()

app.get("/", (req, res)=> {
    res.send("This is the Base API end point");
})

app.listen(7500, ()=> {
    console.log("listening on port 7500");
})