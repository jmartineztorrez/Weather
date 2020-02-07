<!DOCTYPE html>
<html>

<head>
    <title></title>
    <link rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>

</head>

<body>
    <section class="content">
        <form method="post" action="controlador.php">

            <label for="" id="label">NOMBRE DE USUARIO</label>
            <input type="text" class="form-control" name="usuario" id="usuario" placeholder="Escribe tu usuario">

            <label for="" id="label">PASSWORD</label>
            <input type="text" class="form-control" name="password" id="password" placeholder="Escribe tu contraseña">

            <input type="hidden" name="oculto" value="2">
            <input type="submit" class="btn btn-primary"  name="iniciar" id="iniciar" value="ACCEDER">
            <input type="button" class="btn btn-primary"  onclick="location.href='../index.php'" name="cerrar" id="cerrar" value="CERRAR">
    </form>
    </section>
</body>

</html>