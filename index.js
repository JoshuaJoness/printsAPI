const express = require("express")
const app = express()

app.listen(4000, () => {
	console.log("Listening on port 4000")
})

app.get("/products", (req,res) => {
	res.send("I AM WORKING!")
})
