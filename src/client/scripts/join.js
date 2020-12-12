const socket = io()
const qu = new URLSearchParams(location.search)
$("#join_form").submit(e => {
    e.preventDefault()
    localStorage.setItem("username", $("#username").val())
    location.href = "/?room=" + $("#room").val()
})

if (qu.get("room") != null) {
    $("#room").val(qu.get("room"))
    $("#room").attr("readonly", "")
}