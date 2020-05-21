const nome = "Silvana"
const sexo = "F"
const idade = 48
const contribuicao = 23

//regra 85-95
const soma = idade + contribuicao

if (sexo == "F") {
  if (soma >= 85) {
    console.log(`${nome} você pode se aposentar!`)
  } else {
    console.log(`${nome} você ainda não pode se aposentar!`)
  }
} 
else {
	if (soma >= 95) {
	   console.log(`${nome} você pode se aposentar!`)
	} 
	else {
	   console.log(`${nome} você ainda não pode se aposentar!`)
	}
}