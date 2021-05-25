const express = require("express")
const route = express.Router()
const postagem = require("../database/postagem")

// INDEX
route.get("/", function(req, res) {
    res.render("index.pug")
})

// FEED
route.get("/feed", function(req, res) {
    postagem.Obter().then(function(resultados) {
        res.render("feed.pug", { postagens: resultados })
    })
})

route.post("/postagem", function(req, res) {
    const { usuario, descricao } = req.body
    postagem.Criar(usuario, descricao)
    res.redirect("back")
})

module.exports = route