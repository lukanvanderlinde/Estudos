<!DOCTYPE html>
<html>
    <head>
        <!-- META -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

        <!-- RESET CSS -->
        <link href="assets/css/reset.css" rel="stylesheet">

        <!-- JQUERY -->
        <script src="assets/js/jquery-3.2.1.min.js"></script>

        <!-- BOOTSTRAP -->
        <link href="assets/css/bootstrap.css" rel="stylesheet">
        <link href="assets/css/bootstrap-theme.css" rel="stylesheet">
        <script src="assets/js/bootstrap.min.js"></script>

        <!-- LOJA CSS -->
        <link href="assets/css/loja.css" rel="stylesheet">

        <!-- TITULO -->
        <title>Minha Loja</title>
    </head>
    
    <body>

        <?php $nome = "Lukan"; ?>

        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.php">Minha Loja</a>
                </div>

                <div class="nav navbar-nav">
                    <li><a href="produto-formulario.php">Adiciona Produto</a></li>
                    <li><a href="produto-lista.php">Produtos</a></li>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="principal">