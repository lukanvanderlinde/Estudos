var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var tdImc = paciente.querySelector(".info-imc");

  var pesoEhValido = ValidaPeso(peso);
  var alturaEhValida = ValidaAltura(altura);

  if (!pesoEhValido) {
      tdImc.textContent = "Peso inválido";
      paciente.classList.add("paciente-invalido");
  }

  if (!alturaEhValida) {
      tdImc.textContent = "Altura inválida";
      paciente.classList.add("paciente-invalido");
  }

	if (alturaEhValida && pesoEhValido) {
    var imc = CalculaImc(peso, altura);

    tdImc.textContent = imc;
	}
}

function ValidaPeso(peso) {
  if (peso > 0 && peso < 1000) {
  	return true;
  }else{
  	return false;
  }
}

function ValidaAltura(altura) {
  if (altura > 0 && altura < 3.0) {
  	return true;
  }else{
  	return false;
  }
}

function CalculaImc (peso, altura) {
	var imc = 0;

	imc = peso / (altura * altura);

	return imc.toFixed(2);
}