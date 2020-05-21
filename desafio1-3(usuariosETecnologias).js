//Usuários e tecnologias
const usuarios = [
    { nome: 'Carlos', tecnologias: ['HTML' , 'CSS'] },
    { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
    { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]
 for (let i = 0; i < usuarios.length; i++) {
     console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`)
 }

//Busca por tecnologia
function checaSeUsuarioUsaCSS (usuario){
    if (usuario.tecnologias.includes("CSS")) {

        return true
    }
    else{
        return false
    }
}
 for (let i = 0; i < usuarios.length; i++) {
     //console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias[0]}, ${usuarios[i].tecnologias[1]}`)
     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS( usuarios[i])
     if (usuarioTrabalhaComCSS) {
         console.log (`O usuario ${usuarios[i].nome} trabalha com CSS`)
     }
 }

