const botao = document.getElementById("criar-tarefa");
botao.addEventListener("click", adicionarTarefa);

const input = document.getElementById("texto-tarefa");

function adicionarTarefa() {
  const lista = document.getElementById("lista-tarefas");
    const item = document.createElement("li");
    lista.appendChild(item);

    item.innerHTML = input.value;
    input.value = "";
}

const botaoDois = document.getElementById("remover-finalizados");
botaoDois.addEventListener('click', limparLista);

function limparLista() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = '';
}
