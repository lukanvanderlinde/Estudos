<?php
    include("cabecalho.php");
    include("conecta.php");
    include("banco-categoria.php");
    include("banco-produto.php");

    $id = $_POST['id'];
    $produto = buscaProduto($conexao, $id);
    $categorias = listarCategorias($conexao);
    $usado = $produto['usado'] ? "checked='checked'" : "";
?>

<h1>Alterando produto</h1>

<form action="altera-produto.php" method="post">
    <input type="hidden" name="id" value="<?= $produto['id'] ?>">
    <table class="table">
        <r>
            <tr>
                <td>Nome:</td>
                <td><input class="form-control" type="text" name="nome" value="<?= $produto['nome'] ?>"></td>
            </tr>
            <tr>
                <td>Preço:</td>
                <td><input class="form-control" type="number" name="preco" value="<?= $produto['preco'] ?>"></td>
            </tr>
            <tr>
                <td>Descrição:</td>
                <td><textarea class="form-control" name="descricao"><?= $produto['descricao'] ?></textarea></td>
            </tr>
            <tr>
                <td>Estado:</td>
                <td><input type="checkbox" name="usado" <?= $usado ?> value="true">Usado</td>
            </tr>
            <tr>
                <td>Categorias:</td>
                <td>
                    <select name="categoria_id" class="form-control">
                        <?php foreach($categorias as $categoria) : 
                            $essaEhACategoria = $produto['categoria_id'] == $categoria['id'];
                            $selecao = $essaEhACategoria ? "selected='selected'" : "" ?>
                            
                            <option value="<?= $categoria['id'] ?>" <?= $selecao ?>>
                                <?= $categoria['nome'] ?><br>
                            </option>
                        <?php endforeach ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td><button class="btn btn-info" type="submit">Alterar</button></td>
            </tr>
        </r>
    </table>
</form>

<?php include("rodape.php"); ?>