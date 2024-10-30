let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(id) {
  let gameClicado = document.getElementById(`game-${id}`);
  let image = gameClicado.querySelector(".dashboard__item__img");
  let button = gameClicado.querySelector(".dashboard__item__button");
  let nomeJogo = gameClicado.querySelector(".dashboard__item__name");

  if (image.classList.contains("dashboard__item__img--rented")) {
    if (
      confirm(
        `Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`
      )
    ) {
      image.classList.remove("dashboard__item__img--rented");
      button.classList.remove("dashboard__item__button--return");
      button.textContent = "Alugar";
      jogosAlugados--;
    }
  } else {
    image.classList.add("dashboard__item__img--rented");
    button.classList.add("dashboard__item__button--return");
    button.textContent = "Devolver";
    jogosAlugados++;
  }

  contarEExibirJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});