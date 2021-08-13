const express = require('epress');
const app = express();

app.get("/", (req, res) => {
    res.send("WORKING!!!");
});

app.listen(process.env.PORT || 5000);