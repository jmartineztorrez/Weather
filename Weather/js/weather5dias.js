$(document).ready(function () {
  //function CargarCincoDias() {
    
  
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast?id=3117735&units=metric&APPID=853248bd9496d0e31b3877d41679b5c3",
    datatype: "json",
    type: "GET",
    success: function (respuesta) { 
      console.log(respuesta);
      today = new Date();
      today.setHours(0,0,0,0);
      $.each(respuesta.list, function(index, value){
        var fechaString = new Date(value.dt_txt);
        fechaString.setHours(0,0,0,0);
        var diff = fechaString - today;
        diff = diff / (1000 * 3600 * 24);
        console.log(diff);
        $("#diaMin" + diff).html("Temperatura Minima: " + Math.round(value.main.temp_min));
        $("#diaMax" + diff).html ("Temperatura Maxima: " + Math.round(value.main.temp_max));
  });
},
  })

  
});

