//Dados de um programador
const programador = {
    nome: 'Carlos',
    idade: 32,
    tecnologia: [{ nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }]
}
console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia[0].nome} com especialidade em ${programador.tecnologia[0].especialidade}`)