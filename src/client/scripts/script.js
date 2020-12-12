const socket = io()
const query = new URLSearchParams(location.search)
if (localStorage.getItem("username") && query.get("room") != null) {
    $("#room").val(query.get("room"))
    $("#username").val(localStorage.getItem("username"))
    socket.emit("join", JSON.stringify({
        username: localStorage.getItem("username"),
        room: query.get("room")
    }))
    document.title = `${query.get("room")} | SamChat`
} else if (query.get("room") != null) {
    location.replace("/join.html?room=" + query.get("room"))
} else {
    location.replace("/join.html")
}

// Greet user
// socket.on("greeting", (data) => {
//     $("#app").html($("#app").html() + templates.toast(data))
// })

socket.on("newuser", data => {
    $("#app").html($("#app").html() + templates.toast(data))
})

// Count Users
socket.on("user_count", data => {
    $("#people").text(data)
})

// Recieve Messages
socket.on("message", data => {
    $("#app").html($("#app").html() + templates.message(JSON.parse(data)))
    scrollTo(0,document.body.scrollHeight);
})

// Send Messages
$("#message_form").submit(e => {
    e.preventDefault()
    if ($("#message").val().trim() !== "") {
        let options = {
            message: $("#message").val(),
            author: localStorage.getItem("username"),
            time: $.Date(new Date),
            room: query.get("room")
        }
        socket.emit("message", JSON.stringify(options))
        $("#message").val("")
        $("#message").focus()
    }
})

// $("#message").keyup(() => {
//     socket.emit("")
// })
// $("#message").keydown(() => {
//     socket.emit("")
// })