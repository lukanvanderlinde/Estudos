var tabela = document.querySelector("#buscar-pacientes");

tabela.addEventListener("click", event => {
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", () =>{
		if(xhr.status == 200) {
			var response = xhr.responseText;
			var pacientes = JSON.parse(response);
			
			pacientes.forEach((paciente) => AdicionaPaciente(paciente));
		}else{
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});
	xhr.send();
});