const add = document.getElementById("lista");
function assign() {
  let putWordsInside = document.getElementById("task");
  add.innerHTML += `
  <li onclick="">${putWordsInside.value}</li> <button>Cancella</button>
  `;
}

const completa = (event) => {
  console.log(event.target);
};
