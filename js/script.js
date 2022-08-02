let form = document.getElementById("form");
let input = document.getElementById("tarefas");
let list = document.getElementById("resultado");
let message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  let inputBox = document.createElement("input");
  let element = document.createElement("div");
  element.appendChild(inputBox);
  if (input.value == "") {
    message.textContent = "Você precisa inserir algum dado antes";
    e.preventDefault();
  } else {
    inputBox.setAttribute("value", `${input.value}`);
    inputBox.setAttribute("readonly", true);
    list.appendChild(element);

 
    let edit = document.createElement("span");
    edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

    
    edit.addEventListener("click", () => {
      if (edit.innerText == "Salvar") {
        inputBox.setAttribute("readonly", true);
        edit.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        edit.classList.add("pen-style");
        edit.classList.remove("edit-style");
        inputBox.classList.remove("input-edit");
      } else {
        inputBox.removeAttribute("readonly");
        inputBox.focus();
        inputBox.classList.add("input-edit");
        edit.innerText = "Salvar";
        if (edit.innerText == "Salvar") {
          edit.classList.add("edit-style");
        }
      }
    });

    let remover = document.createElement("span");
    remover.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

   
    remover.addEventListener("click", () => {
      list.removeChild(element);
    });
    element.append(edit);
    element.append(remover);
    message.remove();

    clear();
    e.preventDefault();
  }
});


function clear() {
  input.value = "";
}