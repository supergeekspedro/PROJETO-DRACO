const cliente = require("./connection");

exports.Criar = async function(usuario, descricao) {
    const comando = "INSERT INTO postagem VALUES($1, $2);";
    try {
        await cliente.query(comando, [usuario, descricao]);
        console.log("DEU CERTO");
    }
    catch (erro) {
        return erro;
    }
};

exports.Obter = async function() {
    const comando = "SELECT * FROM postagem;";
    const resultados = await cliente.query(comando);
    return resultados.rows;
};

