<?php
    include("cabecalho.php");
    include("banco-produto.php");
    include("conecta.php");
?>

<?php if(array_key_exists("removido", $_GET) && $_GET["removido"] == "true") { ?>
<p class="alert-success">Produto apagado com sucesso!</p>
<?php } ?>

<table class="table table-striped table-bordered">
    <?php $produtos = listaProdutos($conexao); ?>
    <?php foreach($produtos as $produto) : ?>
        <tr>
            <td><?= $produto['nome']; ?></td>
            <td><?= $produto['preco']; ?></td>
            <td><?= $produto['categoria_nome']; ?></td>
            <td><?= substr($produto['descricao'], 0, 30); ?></td>
            <td>
                <form action="produto-altera-formulario.php" method="post">
                    <input type="hidden" name="id" value="<?= $produto['id'] ?>">
                    <button class="btn btn-info">alterar</button>
                </form>
            </td>
            <td>
                <form action="remover-produto.php" method="post">
                    <input type="hidden" name="id" value="<?= $produto['id'] ?>">
                    <button class="btn btn-danger">remover</button>
                </form>
            </td>
        </tr>
    <?php endforeach ?>
</table>

<?php include("rodape.php"); ?>