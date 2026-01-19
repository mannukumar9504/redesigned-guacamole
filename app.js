const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send("Hello World updated Aniket");
})
app.listen(80, ()=> {
    console.log("server running on port 80")
})