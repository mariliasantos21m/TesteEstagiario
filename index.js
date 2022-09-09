const msgCadastroConcluido= document.getElementById('text_cadastro_realizado')
const formularioCadastro= document.getElementById('formulario_cadastro')
let camposFormPreenchidos = true


formularioCadastro.addEventListener("submit", (e)=>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const entries= formData.entries()
    verificacaoCamposFormulario(entries)
})


function verificacaoCamposFormulario(values){
    let objValues= {}
    for (let entries of values){
        let valorInput=entries[1]
        let nomeInput= entries[0]
        let elemento= document.getElementsByName(nomeInput)[0]

        if (valorInput == ''){
            mudarMensagem(elemento, 'Campo obrigatório!')
            mudarClasse(elemento, 'formulario_cadastro__input--erro')
            camposFormPreenchidos= false
        }
        else{
            mudarMensagem(elemento, '')
            mudarClasse(elemento, 'formulario_cadastro__input')
            objValues[nomeInput]=valorInput
            camposFormPreenchidos= true
        }
    }

    if(camposFormPreenchidos == true){
        formularioCadastro.style.visibility='hidden'
        msgCadastroConcluido.innerText="Obrigado pelo seu cadastro! :D"
        console.log(objValues)
    }

}

function mudarMensagem(input, mensagem){
    const controleCampo = input.parentElement
    const small= controleCampo.querySelector('small')
    small.innerText= mensagem
}

function mudarClasse(elemento, classe){
    elemento.className= classe
}
