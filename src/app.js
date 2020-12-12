const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const routes = require("./routes")

const parser = require('./components/parse')
app.use(express.static(__dirname + "/client"))

let user_count = 0
io.on("connection", (socket) => {
    user_count++
    io.emit("user_count", user_count)

    socket.on("join", raw => {
        let data = JSON.parse(raw)
        socket.join(data.room)
        socket.broadcast.to(data.room).emit("newuser", data.username + " joined the room.");
    })

    socket.on("message", data => {
        if (parser.parseMessage(data) !== false) {
            io.to(JSON.parse(data).room).emit("message", parser.parseMessage(data))
        }
    })

    socket.on("disconnect", () => {
      io.emit("user_count", user_count)
    })
});

app.get("/", (req, res) => routes.index)
const listener = server.listen(8080, () => console.log(`Running on port ${listener.address().port}`))