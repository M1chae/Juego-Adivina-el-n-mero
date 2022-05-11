var aleatorio = Math.floor(Math.random() * 10) + 1;
var intentos = 0;
var correcto = false;

document.getElementById("Button").onclick = function () {
  location.href = "nivelfacil.html";
}

function nivelfacil(){
  alert("Dificultad Fácil. No hay límite de intentos.");
  
  while(correcto == false){
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos ++;
    if(entrada == aleatorio){
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('resp').innerHTML = intentos;
      document.getElementById('num').innerHTML = aleatorio;
    }else
      {
        alert(entrada + " no es el número correcto, intentos usados: " + intentos);
      }
  }
}

function nivelmedio(){
  alert("Dificultad Media. 10 intentos.");

  while (correcto == false && intentos < 10) {
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('resp').innerHTML = intentos;
      document.getElementById('num').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " no es el número correcto, intentos usados: " + intentos);
    }
  }
  if (intentos == 10){
    alert("Juego Terminado, no acertaste al número correcto.")
    document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
    
  }
}

function niveldificil(){
  alert("Dificultad Difícil. 3 intentos.");

  while (correcto == false && intentos < 5) {
    var entrada = prompt("Introduzca un número del 1 al 10: ");
    if (entrada == null){
      return;
    }
    intentos++;
    if (entrada == aleatorio) {
      alert("Correcto! Usaste " + intentos + " intentos.");
      correcto = true;
      document.getElementById('resp').innerHTML = intentos;
      document.getElementById('num').innerHTML = aleatorio;
    } else
    {
      alert(entrada + " no es el número correcto, intentos usados: " + intentos);
    }
  }
  if (intentos == 5) {
    alert("Juego Terminado, no acertaste al número correcto.")
    document.getElementById('fallo').innerHTML = "El número correcto era: " + aleatorio2;
    
    
    }
  }