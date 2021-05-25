const express = require("express");
const postagem = require("./database/postagem");

const app = express();

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("index.pug");
});

app.post("/postagem", function(req, res) {
    const { usuario, descricao } = req.body; 
    postagem.Criar(usuario, descricao);
    res.redirect("back");
});

// HOME, INDEX, FEED, NEWS, EXPLORER, REELS
app.get("/feed", function(req, res) {
    postagem.Obter().then(function(resultados) {
        console.log(resultados);
    });
});

app.listen(3000, function(){
    console.log("SERVIDOR EM FUNCIONAMENTO");
});