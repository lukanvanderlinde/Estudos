<?php
    include("conecta.php");
    include("banco-produto.php");

    $id = $_POST['id'];
    removerProduto($conexao, $id);
    header("Location: produto-lista.php?removido=true");
    die();
?>