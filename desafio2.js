let vitorias = 333;
let derrotas = 5;
let nivel = "";

retornaSaldo(vitorias, derrotas);
function retornaSaldo(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  retornaNivel(saldoVitorias);
}

function retornaNivel(saldoVitorias) {
  if (saldoVitorias <= 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias > 100) {
    nivel = "Imortal";
  }
  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}
