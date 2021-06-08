const cliente = require("./connection")

exports.Criar = async function(usuario, descricao) {
    const comando = "INSERT INTO postagem VALUES($1, $2);"
    try {
        await cliente.query(comando, [usuario, descricao])
        console.log("USUARIO CRIADO")
    }
    catch (erro) {
        return erro
    }
};

exports.Obter = async function() {
    const comando = "SELECT * FROM postagem;"
    const resultados = await cliente.query(comando)
    return resultados.rows
};

exports.ObterUnica = async function(usuario) {
    const comando = "SELECT * FROM postagem WHERE usuario = $1;"
    const resultado = await cliente.query(comando, [usuario])
    return resultado.rows[0]
}

exports.Excluir = async function(usuario) {
    const comando = "DELETE FROM postagem WHERE usuario = $1;"
    try {
        await cliente.query(comando, [ usuario ])
        console.log("USUARIO EXCLUIDO")
    }
    catch (erro) {
        return erro
    }
}

exports.Atualizar = async function(usuario, descricao) {
    const comando = "UPDATE postagem SET descricao = $2 WHERE usuario = $1;"
    try {
        await cliente.query(comando, [usuario, descricao])
        console.log("POSTAGEM ATUALIZADA")
    }
    catch (erro) {
        return erro
    }
}