const express = require("express")
const route = require("./routes/index")
const app = express()

app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/public", express.static("public"))

app.use(route)

app.listen(3000, function(){
    console.log("SERVIDOR EM FUNCIONAMENTO")
})