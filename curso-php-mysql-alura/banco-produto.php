<?php       
function insereProduto ($conexao, $nome, $preco, $descricao, $categoria, $usado) {
    $query = "insert into produtos (nome, preco, descricao, categoria_id, usado) value ('{$nome}', {$preco}, '{$descricao}', {$categoria}, {$usado})";
    $resultadoDaInsercao = mysqli_query($conexao, $query);
    
    return $resultadoDaInsercao;
}       

function alteraProduto ($conexao, $id, $nome, $preco, $descricao, $categoria_id, $usado) {
    $query = "update produtos set nome ='{$nome}', preco = {$preco}, descricao = '{$descricao}', categoria_id = {$categoria_id}, usado = {$usado} where id = '{$id}'";
    
    return mysqli_query($conexao, $query);
}

function listaProdutos ($conexao) {
    $resultado = mysqli_query($conexao, "select p.*,c.nome as categoria_nome from produtos as p join categoria as c on c.id=p.categoria_id");
    $produtos = array();

    while ($produto = mysqli_fetch_assoc($resultado)) {
        array_push ($produtos, $produto);
    }

    return $produtos;
}

function removerProduto($conexao, $id) {
    $query = "delete from produtos where id = {$id}";
    return mysqli_query($conexao, $query);
}

function buscaProduto($conexao, $id) {
    $query = "select * from produtos where id = {$id}";
    $resultado = mysqli_query($conexao, $query);
    return mysqli_fetch_assoc($resultado);
}