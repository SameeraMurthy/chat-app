exports.parseMessage = raw => {
    let data = JSON.parse(raw)
    if (data.message.trim() !== "" && data.author.trim() !== "") {
        return JSON.stringify({
            message: data.message.trim().replace(/</gi, "&lt;").replace(/>/gi, "&gt;"),
            author: data.author.trim().replace(/</gi, "&lt;").replace(/>/gi, "&gt;"),
            time: data.time.replace(/</gi, "&lt;").replace(/>/gi, "&gt;"),
            room: data.room
        })
    } else {
        return false
    }
}