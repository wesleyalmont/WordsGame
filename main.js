const jogarEl = document.querySelector(".jogar-wrapper");
const btnJogar = document.querySelector(".btn-jogar");


// Vetor com as palavras que podem ser jogadas;
const palavras = [
  "abacate",
  "uva",
  "mexerica",
  "tomate",
  "mamão",
  "banana",
  "abacaxi",
  "pedra",
  "arroz",
  "vegetal",
  "girafa",
  "tigre",
  "cachorro",
  "gato",
  "natal",
];

let jogando = true;
let score = 10;
let chances = 10;
// BOTAO INICIAR JOGO
btnJogar.addEventListener("click", () => {
  jogarEl.classList.add("hidden");
  renderPalavra();
  jogando = true;
});

if (jogando) {
  const palavraEl = document.querySelector(".palavra");
  const sortearElBtn = document.querySelector(".btn-sortear");
  const letraEl = document.querySelector(".letra-max");
  const p = document.getElementsByTagName("p");
  const scoreEl = document.querySelector(".score");
  const chancesEl = document.querySelector('.chances');

  // Sorteia a palavra que vai ser jogada
  const sortearNumero = function (arr) {
    let numero = Math.trunc(Math.random() * palavras.length);
    const sorteada = palavras[numero];
    return sorteada;
  };

  //Seleciona a palavra sorteada e mascara os caracteres
  const esconderPalavra = function (palavraSorteada) {
    let palavraEscondidaArr = [];
    for (letra of palavraSorteada) {
      palavraEscondidaArr.push(letra.replace(letra, "*"));
    }
    return palavraEscondidaArr;
  };

  // Mostra na página as letras escondidas
  const mostrarPalavra = function (palavraEscondida) {
    resetarPalavraPainel();
    palavraEscondida.forEach((letra) => {
      palavraEl.innerHTML += `<p class="letra">${letra}`;
    });
  };

  // Verifica se contem a letra na palavra sorteada, se verdadeiro altera o vetor com a letra encontrada
  const checarLetra = function (letra) {
    for (let i = 0; i < palavraSorteada.length; i++) {
      if (letra === palavraSorteada[i]) {
        console.log(letra);
        palavraEscondida[i] = letra;
        score += 100;
        scoreEl.innerText = score;
      } else {
        score -= 10;
        scoreEl.innerText = score;
      }
    }
  };

  // Valida a palavra jogada
  const validarPalavra = function (arr1, arr2) {
    if (arr1 == arr2) {
      chances = 10;
      chancesEl.innerHTML
      for (const letra of p) {
        letra.style.backgroundColor = "#00b894";
        letra.style.color = "#fff";
      }
      setTimeout(() => {
        renderPalavra(); //  sorteia nova palavra
      }, 1000);
    } else {
      if(chances <= 0) {
        alert('VOCÊ PERDEU O JOGO :(')
        jogarEl.classList.remove("hidden");
        chances = 10;
        score = 0;
        scoreEl.innerText = score;
      }else{
        chances -= 1
      chancesEl.innerHTML = chances;
      }
      for (const letra of p) {
        letra.style.backgroundColor = "#d63031";
        letra.style.color = "#fff"; // parei aqui!!
      }
    }
  };

  // RESETA A LETRA DIGITADA
  const resetarPalavraPainel = function () {
    palavraEl.innerHTML = " ";
  };

  // Botao sorteia uma nova palavra e a renderiza com a funcao renderPalavra()
  sortearElBtn.addEventListener("click", () => {
    renderPalavra();
  });

  // INPUT LETRA
  letraEl.addEventListener("keyup", () => {
    checarLetra(letraEl.value); 
    mostrarPalavra(palavraEscondida);

    let palavraEscondidaString = palavraEscondida.join("");
    validarPalavra(palavraEscondidaString, palavraSorteada);
    letraEl.value = "";
  });

  // RENDERIZA A PALAVRA
  function renderPalavra() {
    palavraSorteada = sortearNumero(palavras);
    palavraEscondida = esconderPalavra(palavraSorteada);
    mostrarPalavra(palavraEscondida);
    chancesEl.innerHTML = chances;
  }
}

// Econder MOdal Box

modalEl.classList.toggle("show");
