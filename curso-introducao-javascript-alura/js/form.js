var botaoAdicionar = document.querySelector("#adicionar-paciente");
var form = document.querySelector("#form-adiciona");

botaoAdicionar.addEventListener("click", (event) => {
	event.preventDefault();

	var paciente = GerarPaciente(form);
	var erros = ValidaPaciente(paciente);

	if (erros.length > 0) {
		MensagensErro(erros);
		return;
	}

	AdicionaPaciente(paciente)
	MensagensErro(erros);
	form.reset();
});

function AdicionaPaciente(paciente) {
	var pacienteTr = PacienteTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}

function GerarPaciente(form) {
	return paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: CalculaImc(form.peso.value, form.altura.value)
	}
}

function ValidaPaciente(paciente) {

	var erros = [];

	if (paciente.nome.length == 0) erros.push("O nome invalido");
	if (!ValidaPeso(paciente.peso)) erros.push("O peso é invalido");
	if (!ValidaAltura(paciente.altura)) erros.push("O altura é invalida");
	if (paciente.gordura.length == 0) erros.push("O gordura é invalida");

	return erros;
}

function MensagensErro(erros) {
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function PacienteTr(paciente) {
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(MontaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(MontaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(MontaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(MontaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(MontaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function MontaTd(info, classe) {
	var td = document.createElement("td");

	td.textContent = info;
	td.classList.add(classe);

	return td;
}