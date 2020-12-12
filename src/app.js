const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const routes = require("./routes")

app.use(express.static(__dirname + "/client"))

let user_count = 0
io.on("connection", (socket) => {
    user_count++
    io.emit("greeting", "You entered the chat.")
    io.emit("user_count", user_count)
    socket.on("message", data => {
        io.emit("message", data)
    })
    socket.on("disconnect", () => {
      user_count--
    })
});

app.get("/", (req, res) => routes.index)
const listener = server.listen(8080, () => console.log(`Running on port ${listener.address().port}`))