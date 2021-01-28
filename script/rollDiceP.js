function rollDiceP() {
  var dice1 = document.querySelector("p#dado1");
  document.getElementById("OSNF").style.opacity = "0%";
  document.getElementById("OSNF").style.height = "1px";
  document.getElementById("slider").style.opacity = "0%";
  document.getElementById("slider").style.height = "1px";
  document.getElementById("janela").style.opacity = "100%";
  document.getElementById("janela").style.height = "200px";
  document.getElementById("janela").style.bottom = "250px";
  document.getElementById("janela").style.left = "245px";
  document.getElementById("limpar").style.opacity = "100%";

  dice1.innerHTML =
    '<input type="radio" name="nao" id="simounao" onclick="ativar05()" checked style="position: relative; bottom:1000px;"> <label for="simounao" id="sim" style="background-image: none; outline: 0; -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05); box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); background-color: #91711B; border-right: 1px solid #B48C25; right: 5px;">Com Atributo</label> ' +
    '<input type="radio" name="nao" id="naoousim" onclick="desativar05()" >  <label for="naoousim" id="sim">Sem Atributo</label> ' +
    '<p> <label for="sdado">Dado: </label>  <input type="number" name="dado" id="sdado" style="width:50px;" value="100"> </p> ' +
    '<p> <label for="atrabitos" id="latributos">Atributos:</label> <input type="number" name="atributos" id="atributos" style="width:50px;"> </p>' +
    '<p> <input type="button" value="Rolar" onclick="rollP()" id="final" class="btn btn-green"> </p>';
}

function rollP() {
  
  var answer = document.querySelector("div#res");
  var dice = document.getElementById("sdado").value;
  random = Math.random() * dice;
  answer.innerHTML += Math.round(random) + "<br>";

  random2 = Math.random() * dice;
  answer.innerHTML += Math.round(random2) + "<br>";
  
  if (random > random2) {
    answer.innerHTML += "O dado considerado será o primeiro <br>";
    var atributos = document.getElementById("atributos").value;
    if (random <= atributos / 5) {
      answer.innerHTML += "SUCESSO EXTREMO! <br>";
    } else if (random <= atributos / 2) {
        answer.innerHTML += "Sucesso Bom! <br>";
    } else if (random <= atributos) {
        answer.innerHTML += "Sucesso Normal <br>";
    } else if (random > atributos) {
        answer.innerHTML += "Fracasso <br>";
    }
  }


  if (random < random2) {
    answer.innerHTML += "O dado considerado será o segundo <br>";
    var atributos = document.getElementById("atributos").value;
    if (random2 <= atributos / 5) {
      answer.innerHTML += "SUCESSO EXTREMO! <br>";
    } else if (random <= atributos / 2) {
      answer.innerHTML += "Sucesso Bom! <br>";
    } else if (random2 <= atributos) {
      answer.innerHTML += "Sucesso Normal <br>";
    } else if (random2 > atributos) {
      answer.innerHTML += "Fracasso <br>";
    }
  }
}

function desativar05() {
  var dice1 = document.querySelector("p#dado1");
  document.getElementById("janela").style.height = "0px";
  document.getElementById("janela").style.opacity = '0%';
  dice1.innerHTML = 
  '<input type="radio" name="nao" id="simounao" onclick="ativar05()" checked style="position: relative; bottom:1000px;"> <label for="simounao" id="sim" style="position: relative; right: 5px;">Com Atributo</label> ' +
  '<input type="radio" name="nao" id="naoousim" onclick="desativar05()">  <label for="naoousim" id="sim" style="background-image: none; outline: 0; -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05); box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); background-color: #91711B; border-right: 1px solid #B48C25;"">Sem Atributo</label> ' +
  '<p> <label for="sdado">Dado: </label>  <input type="number" name="dado" id="sdado" style="width:50px;" value="100"> </p> ' +
  '<p> <input type="button" value="Rolar" onclick="rollP()" id="final" class="btn btn-green"> </p>'
}

function ativar05() {
  var dice1 = document.querySelector("p#dado1");
  document.getElementById("OSNF").style.opacity = "0%";
  document.getElementById("OSNF").style.height = "1px";
  document.getElementById("slider").style.opacity = "0%";
  document.getElementById("slider").style.height = "1px";
  document.getElementById("janela").style.opacity = "100%";
  document.getElementById("janela").style.height = "200px";
  document.getElementById("janela").style.bottom = "250px";
  document.getElementById("janela").style.left = "245px";
  document.getElementById("limpar").style.opacity = "100%";
  
  dice1.innerHTML =
    '<input type="radio" name="nao" id="simounao" onclick="ativar05()" checked style="position: relative; bottom:1000px;"> <label for="simounao" id="sim" style="position: relative; right: 5px; background-image: none; outline: 0; -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05); box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); background-color: #91711B; border-right: 1px solid #B48C25;">Com Atributo</label> ' +
    '<input type="radio" name="nao" id="naoousim" onclick="desativar05()">  <label for="naoousim" id="sim">Sem Atributo</label> ' +
    '<p> <label for="sdado">Dado:</label>  <input type="number" name="dado" id="sdado" style="width:50px;" value="100"> </p> ' +
    '<p> <label for="atrabitos" id="latributos">Atributos:</label> <input type="number" name="atributos" id="atributos" style="width:50px;"> </p>' +
    '<p> <input type="button" value="Rolar" onclick="rollP()" id="final" class="btn btn-green"> </p>';
}
