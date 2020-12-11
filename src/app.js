const fs = require('fs')
const express = require('express')
const app = express()
const routes = require("./routes")
app.use(express.static(__dirname + "/client"))

app.get("/", (req, res) => routes.index)
const listener = app.listen(8080, () => console.log(`Running on port ${listener.address().port}`))