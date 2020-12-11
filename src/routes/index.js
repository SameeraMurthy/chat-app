
// Return the homepage
module.exports = (req, res) => {
    res.sendFile(__dirname + "/client/index.html")
}