<?php 
function registrarUsu($link){
	$consulta = "select *  from usuarios where email = '$_POST[email]'";
	$r = mysqli_query($link,$consulta);
	$num = mysqli_num_rows($r);

	$consul = "select *  from usuarios where usuario = '$_POST[usuario]'";
	$re = mysqli_query($link,$consul);
	$nume = mysqli_num_rows($re);


	if($num!=0){
		
		header("location: formulario_registro.php?error=Email");
	}

	else if($nume!=0){
		header("location: formulario_registro.php?error=Usuario");
	}

	else if ($_POST['tmptxt'] != $_SESSION['tmptxt']) {
		header("location: formulario_registro.php?error=Codigo");
	}

	else{
		$hash = password_hash($_POST['password'], PASSWORD_DEFAULT);
		$insert = "insert into login (nombre, apellido, usuario, email,password) 
		values ('$_POST[nombre]','$_POST[apellido]', '$_POST[usuario]','$_POST[email]','$hash')";
		mysqli_query($link,$insert);
		echo mysqli_error($link);
		header('location:formulario_registro.php?error=bien');
	}
}


function login($link){
	$sql = "select * from login where usuario = '$_POST[usuario]'";	
	$r= mysqli_query($link,$sql);
	$numero = mysqli_num_rows($r);
	if ($numero == 1) {
		$arr = mysqli_fetch_array($r);
		
		if (password_verify($_POST['password'], $arr['password'])) {
			$_SESSION['id_login'] = $arr['id_login'];
			header("location: ../index.html");			
		}
		else{
			
			echo "Clave invalida";
		}
	}	
	else{
		echo "Usuario no existe";
	}

}
?>