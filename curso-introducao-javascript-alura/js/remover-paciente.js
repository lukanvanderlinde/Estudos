var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", event => event.target.parentNode.remove());