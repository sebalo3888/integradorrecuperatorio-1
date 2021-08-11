
function pregunta () {var respuesta1 = prompt ('¿Cuantos goles metio Argentina contra Ecuador?')
    var r = document.getElementById ("resultados")
    r.innerHTML = "Ecuador 0 - "+ respuesta1+ " Argentina // Correcta: 3"
}

function pregunta2 () {var respuesta2 = prompt ('¿Cuantos goles metio Argentina contra Paraguay?')
    var e = document.getElementById ("resultados2")
    e.innerHTML = "Paraguay 0 - "+ respuesta2+ " Argentina // Correcta: 1"
}

function pregunta3 () {var respuesta3 = prompt ('¿Cuantos goles metio Argentina contra Brasil?')
    var d = document.getElementById ("resultados3")
    d.innerHTML = "Brasil 0 - "+ respuesta3+ " Argentina // Correcta: 1"
}

function pregunta4 () {var numero = Number (prompt ("¿Deci un Numero del 1 al 28 para saber cual es tu jugador de la suerte?"))
var campeones = ['La Escaloneta', 'Sergio Agüero','Julián Álvarez','Joaquín Correa','Ángel Correa','Lautaro Martínez','Lionel Messi','Angel Di María','Guido Rodríguez','Rodrigo De Paul','Alejandro Gómez','Nicolás Domínguez','Ángel Correa ','Leandro Paredes','Giovani Lo Celso','Exequiel Palacios','Nicolás González',
'Gonzalo Montiel','Nicolás Otamendi','Germán Pezzella','Nicolás Tagliafico','Lucas Martínez Quarta','Marcos Acuña','Lisandro Martínez','Cristian Romero','Agustín Marchesín','Emiliano Martínez', 'Franco Armani','Juan Musso']
var h = document.getElementById ("resultados4")
h.innerHTML = "Tu Jugador de la Suerte eeeees.... "+ (campeones [numero])


}

 function mostrar (){
     var argentina = document.getElementById ('argentina')
     argentina.style.display = 'block';
    }

 function premiosDeAmerica (){
    var prem = document.getElementById ('premios')
    prem.style.display = 'block';
}





 