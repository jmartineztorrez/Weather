<?php
    session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <title></title>
    <link rel="stylesheet" href="css/style.css">
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>

<body>
<div id="inicio">
<?php
    if(isset($_SESSION['id_login'])){
        header("location: index.html");
        }
?>
    <nav>
        <h2>Inicio de Sesion</h2>
        <hr>
        <div class="a"><a href="php/formulario_login.php"   >Login</a></div>
        <div class="a"><a href="php/formulario_registro.php"  >Registro</a></div>
    </nav>

</div>



</body>