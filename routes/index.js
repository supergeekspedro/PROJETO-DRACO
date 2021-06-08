const express = require("express")
const route = express.Router()
const postagem = require("../database/postagem")


route.get("/", function(req, res) {
    res.render("index.pug")
})

route.get("/feed", function(req, res) {
    postagem.Obter().then(function(resultados) {
        res.render("feed.pug", { postagens: resultados })
    })
})

route.get("/post", function(req, res) {
    res.render("post.pug")
})

route.get("/pub/:usuario", function(req, res) {
    const { usuario } = req.params
    postagem.ObterUnica(usuario).then(function(resultado) {
        res.render("pub.pug", { publicacao: resultado })      
    })
})

route.get("/remove/:usuario", function(req, res) {
    const { usuario } = req.params
    postagem.Excluir(usuario)
    res.redirect("back")
})


route.post("/postagem", function(req, res) {
    const { usuario, descricao } = req.body
    postagem.Criar(usuario, descricao)
    res.redirect("back")
})

route.post("/atualizar", function(req, res) {
    const { usuario, descricao } = req.body
    postagem.Atualizar(usuario, descricao)
    res.redirect("back")
})


module.exports = route