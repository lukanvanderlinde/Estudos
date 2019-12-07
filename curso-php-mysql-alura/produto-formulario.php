<?php
    include("cabecalho.php");
    include("conecta.php");
    include("banco-categoria.php");

    $categorias = listarCategorias($conexao);
?>

<h1>Formulário de produto</h1>

<form action="adiciona-produto.php" method="post">
    <table class="table">
        <r>
            <tr>
                <td>Nome:</td>
                <td><input class="form-control" type="text" name="nome"></td>
            </tr>
            <tr>
                <td>Preço:</td>
                <td><input class="form-control" type="number" name="preco"></td>
            </tr>
            <tr>
                <td>Descrição:</td>
                <td><textarea class="form-control" name="descricao"></textarea></td>
            </tr>
            <tr>
                <td>Estado:</td>
                <td><input type="checkbox" name="usado" value="true">Usado</td>
            </tr>
            <tr>
                <td>Categorias:</td>
                <td>
                    <select name="categoria_id" class="form-control">
                        <?php foreach($categorias as $categoria) : ?>
                            <option value="<?= $categoria['id'] ?>">
                                <?= $categoria['nome'] ?><br>
                            </option>
                        <?php endforeach ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td><button class="btn btn-primary" type="submit">Cadastrar</button></td>
            </tr>
        </r>
    </table>
</form>

<?php include("rodape.php"); ?>