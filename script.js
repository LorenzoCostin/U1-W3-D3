const aggiungiCosa = (submitEvent) => {
  submitEvent.preventDefault();
  const form = submitEvent.target;
  const inputList = form.elements;
  const cosa = {};
  for (let i = 0; i < inputList.length; i++) {
    if (inputList[i].tagName !== "BUTTON") {
      const valoreInput = inputList[i].value;
      const idInput = inputList[i].id;
      cosa[idInput] = valoreInput;
    }
  }
  console.log(cosa);
  const conferma = confirm("Sei sicuro?");
  if (conferma) {
    const container = document.querySelector(".lista");

    const li = document.createElement("li");

    li.innerText = `${cosa.nome}`;
    li.style.backgroundColor = cosa.colore;

    container.appendChild(li);
  } else alert("Operazione annullata");
};
