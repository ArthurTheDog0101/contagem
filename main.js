const botoes = document.querySelectorAll(".botao")
const textos = document.querySelectorAll(".aba-conteudo")

for(let i =0;i<botoes.length;i++){
    console.log(botoes[i])
    botoes[i].onclick = function(){
        for(let j=0;j<botoes.length; j++){
        console.log("textos[j]")
       botoes[j].classList.remove('ativo')
       textos[j].classList.remove('ativo')
            console.log(textos[j])
    } 
        botoes[i].classList.add('ativo')
        textos[i].classList.add('ativo')
    }
}

const contadores = document.querySelectorAll(".contador") 
const tempoObjetivo1 = new Date("2024-10-06T00:00:00"); 
let tempoatual = new Date()

contadores[0].textContent = ((tempoObjetivo1 - tempoatual)/1000)/60/60/24