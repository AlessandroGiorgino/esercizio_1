//cominciamo manipolando il form

let taskForm = document.getElementById("newPerson");
//allego al form un comportamento predefinito per l'evento submit

//RECUPERIAMO I DATI

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  //ora cominciamo a definire il nostro comportamento

  const taskInputField = document.getElementById("newTask"); //localizziamo l'input

  const taskInserita = taskInputField.value; //predniamo ciò che ha inserito, il value

  // console.log(taskInserita); //se vogliamo lo logghiamo

  let nuovaTaskDiv = document.createElement("div");
  nuovaTaskDiv.classList.add("stileContenitoreTask");
  //riempio con innerHTML e i backtick che ci permettono di inserire variabili con ${}
  nuovaTaskDiv.innerHTML = `       
    <p class="pTask">${taskInserita}</p>
    <button class="deleteButton">Fatto!</button>
    `;
  //seleziono il div nell?html che avevamo scelto

  document.getElementById("listaTask").appendChild(nuovaTaskDiv);

  //svuotiamo i campi quando abbiamo inserito il nuovo contatto
  taskInputField.value = "";

  // ci manca quindi  di far sì che il button creato sopra con innerHTML  elimini effettivamente il contenuto della card
  const allTheDeleteButtons = document.querySelectorAll(".deleteButton"); //cosi abbiamo trovato tutti i button eleimina conteuti nelle task card
  allTheDeleteButtons.forEach((pulsante) => {
    //per ogni bottone
    pulsante.addEventListener("click", function (e) {
      //come faccio a capire in quale card soono? perché ad ora sono su tutti!! for each
      //   console.log(e.target.parentElement); //
      e.target.parentElement.remove(); //partamo dall'evento  dall'evento vediamo il target, quello premuto (il button), e poi con .parentEleemnt abbbiamo il div specuifico. A quel punto con remove() lo eliminiano
    });
  });

  const barrato = document.querySelectorAll(".pTask");
  barrato.forEach((paragrafo) => {
    paragrafo.addEventListener("click", function (e) {
      e.target.style.textDecoration = "line-through";
    });
  });
});
//
//fdfda
