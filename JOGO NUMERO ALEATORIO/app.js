alert("Olá, seja bem vindo ao jogo do número secreto");

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto
while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);

  // se o chute for igual ao número secreto

  if (chute == numeroSecreto) {
    break;
  }
  // senão
  else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }

    tentativas++;
  }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns, você acertou o número secreto ${numeroSecreto} com  ${tentativas} ${palavraTentativa}`
);

/*
if(tentativas > 1){
  alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}
else{
  alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com  ${tentativas} tentativas`);
}*/
