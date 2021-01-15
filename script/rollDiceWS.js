function rollDices() {
  var dice1 = document.querySelector("p#dado1");
  document.getElementById("OSNF").style.opacity = "0%";
  document.getElementById("OSNF").style.height = "1px";
  document.getElementById("slider").style.opacity = "0%";
  document.getElementById("slider").style.height = "1px";
  document.getElementById("janela").style.opacity = "0%";

  dice1.innerHTML =
    '<input type="radio" name="nao" id="simounao" onclick="ativar3()" style="position: relative; bottom:1000px;"> <label for="simounao" id="sim" style="position: relative; right: 5px;">Com Atributo</label> ' +
    '<input type="radio" name="nao" id="naoousim" onclick="desativar2()" checked id="sim">  <label for="naoousim" id="sim" style="background-image: none; outline: 0; -webkit-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); -moz-box-shadow: inset 0 2px 4px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.05); box-shadow: inset 0 2px 4px rgba(0,0,0,0.15), 0 1px 2px rgba(0,0,0,0.05); background-color: #91711B; border-right: 1px solid #B48C25;">Sem Atributo</label> ' +
    '<p> Dado:  <input type="number" name="dado" id="sdado" style="width:50px;" value="6"> </p> ' +
    '<p> Quant: <input type="number" name="quantidade" id="quantidade" value="2" style="width:50px;"> </p> ' +
    '<p> <input type="button" value="Rolar" onclick="rolls()" id="final" class="btn btn-green"> </p >';
}

function rolls() {
  var answer = document.querySelector("div#res");
  var dice = document.getElementById("dado").value;
  var quant = document.getElementById("quantidade").value;
  var i = 0;
  var sum = 0;
  while (i != quant) {
    i++;
    random = Math.random() * dice;
    answer.innerHTML += " " + Math.round(random) + " <br>";
    sum = Math.round(sum + random);
  }
  answer.innerHTML += " Total " + sum + " <br>";

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