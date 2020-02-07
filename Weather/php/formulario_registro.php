

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
    <section class="container">
        <form method="post" action="controlador.php">
            <label for="" id="label">NOMBRE</label>
            <input type="text"  class="form-control" name="nombre" id="nombre" placeholder="Escribe tu nombre">
            
            <label for="" id="label">APELLIDO</label>
            <input type="text" class="form-control" name="apellido" id="apellido" placeholder="Escribe tu apellido">

            <label for="" id="label">NOMBRE USUARIO</label>
            <input type="text" class="form-control" name="usuario" id="usuario" placeholder="Escribe usuario">

            <label for="" id="label">EMAIL</label>
            <input type="text" class="form-control" name="email" id="email" placeholder="Escribe tu email">

            <label for="" id="label">PASSWORD</label>
            <input type="text" class="form-control" name="password" id="password" placeholder="Escribe tu contraseña">
            <img src="captcha.php" width="100" height="30" class="img-polaroid"/>
            <input type="text" class="form-control" name="tmptxt" placeholder="Ingresa el Código" />
            <input type="hidden" name="oculto" value="1">

            <?php
            if (isset($_GET['error'])) {
                if ($_GET['error']== 'Email') {
                    echo "Email ya Existe";   
                }
                elseif ($_GET['error']== 'Usuario') {
                    echo "Usuario ya Existe";
                }
                elseif ($_GET['error']== 'Codigo') {
                    echo "Código incorrecto";
                }
                elseif ($_GET['error']== 'bien'){
                    echo "Agregado con éxito";
                }
                
            } ?>

<input type="submit" class="btn btn-primary" name="iniciar" id="iniciar" value="REGISTRARSE">
            <input type="button" class="btn btn-primary" onclick="location.href='../index.php'" name="cerrar" id="cerrar" value="CERRAR">
        </form>

    </section>
</body>

</html>