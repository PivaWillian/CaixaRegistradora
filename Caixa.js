var valor = prompt("Quanto gostaria de sacar?")
var notas = [0, 0, 0, 0, 0]
var saida = " "
while (valor != 0) {
  if (valor >= 100) 
  {
    notas[0] = (valor / 100|0)
    valor = valor % 100
    saida += notas[0] + " notas de R$100. "
  } else if (valor >= 50) 
  {
    notas[1] = (valor / 50|0)
    valor = valor % 50
    saida += notas[1] + " notas de R$50. "
  } else if (valor >= 10) 
  {
    notas[2] = (valor / 10|0)
    valor = valor % 10
    saida += notas[2] + " notas de R$10. "
  } else if (valor >= 5) 
  {
    notas[3] = (valor / 5|0)
    valor = valor % 5
    saida += notas[3] + " notas de R$5. "
  } else if (valor >= 1) 
  {
    notas[4] = (valor / 1|0)
    valor = valor % 1
    saida += notas[4] + " notas de R$1."
  } else if(valor < 0)
  {
  	console.log("Valor inválido.")
    valor = 0
    break
  }
}
if(saida != " ")
console.log(saida)