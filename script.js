//Seleciono o input

const input = document.querySelector("input");

//Adiciono um evento de escuta ao levantar um tecla
//e executo a func addTask
input.addEventListener("keyup", keyListener);

//Seleciono Ul
const ul = document.querySelector("ul");

function keyListener(e) {
  const tecla = e.key;
  //se clicar enter ele chama função addTask
  tecla === "Enter" ? addTask() : console.log("ainda não");
}

//função que adiciona li (ou task)
function addTask() {
  //armazeno o valor do inputText em uma variavel
  inputText = input.value;
  // crio um li e passo o valor do input
  const createLi = document.createElement("li");
  createLi.innerText = inputText;
  //adiciono um novo li dentro do ul
  ul.append(createLi);

  input.value = "";
}
