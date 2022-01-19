const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("WORKING 2022!!!");
});

app.listen(process.env.PORT || 5000);