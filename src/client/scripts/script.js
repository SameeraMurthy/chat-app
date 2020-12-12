const socket = io()
socket.on("greeting", (data) => {
    $("#app").html($("#app").html() + templates.toast(data))
})

socket.on("user_count", data => {
    alert(data)
})
socket.on("message", data => {
    $("#app").html($("#app").html() + templates.message(JSON.parse(data)))
    scrollTo(0,document.body.scrollHeight);
})

$("#message_form").submit(e => {
    e.preventDefault()
    let options = {
        message: $("#message").val(),
        author: "Anonymous",
        time: $.Date(new Date)
    }
    socket.emit("message", JSON.stringify(options))
})