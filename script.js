const frases = {
    0:  [`"Nada é tão ruim que não possa piorar"`],
    1:  [`"É só uma fase ruim logo vai piorar"`],
    2:  [`"Você nunca sentirá frio se estiver coberto de decepções"`],
    3:  [`"Desista"`],
    4:  [`"Você não pode mais mudar o passado, mas pode estragar seu futuro"`],
    5:  [`"Você nunca vai falhar se nunca tentar"`],
    6:  [`"A razão do fracasso é a tentativa"`],
    7:  [`"Os corajosos são aqueles que mesmo tremendo de medo lutam por um bem maior"`],
    8:  [`"Seu esforço não faz maior sentido se você não acredita em si mesmo"`],
    9:  [`"Kaizoku ou ni ore wa naru"`],
}

var click = 0
var last;

const p = document.querySelector('#text-frase > p')


function sortear(){
    click++
    
    if(click === 1){
        
        var rand = parseInt(Math.random() * (Object.keys(frases).length))
        while(rand === last){
            rand = parseInt(Math.random() * (Object.keys(frases).length))
        }
        
        last = rand

        frase(rand)

        console.log(rand)

    } else if(click === 2){
        
        var rand2 = parseInt(Math.random() * (Object.keys(frases).length))
        while(rand2 === last){
            rand2 = parseInt(Math.random() * (Object.keys(frases).length))
        }

        last = rand2
        click = 0

        frase(rand2)

        console.log(rand2)
    }
}

function frase(n){
    p.innerText = frases[n][0]
}