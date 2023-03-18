let inputTxt = document.querySelector("#insira-nome")
let nome = inputTxt.value
let itemEscolidoPeloUsuario = ""
let itemSorteado = ""

function enviaName(){
    nome = inputTxt.value
    if(nome == ""){
        return alert("Insira Um nome")
    }
    mudaTela()
}

let numeroTela = 1
let tela = document.querySelector(`.tela-${numeroTela}`)
let proxTela = document.querySelector(`.tela-${numeroTela+1}`)
function mudaTela(){

    tela.style.display = "none"
    proxTela.style.display = "block"
    numeroTela += 1  
    setaBemVindo(nome)
}

function setaBemVindo(name){
    let sect = document.querySelector('#bem-vindo-name')
    let criaSpn = document.createElement('span')
    criaSpn.className ='spn-bemvindo'
    criaSpn.innerHTML = name
    sect.appendChild(criaSpn)
}

    let contagemLimiteItem = 0


function escolheuItem(item){
    contagemLimiteItem ++
    
    let mostraItem = document.querySelector('#item-escolhido2')
    let telaitem = document.querySelector('#item-escolhido')
    let achaImgParaDel = document.querySelector('.mostra-icon',)
    let img = document.createElement('img');
    telaitem.style.display = 'block'
    
    if(contagemLimiteItem == 2){// contagemlimiteitem se for 2 quer dizer que ja tem uma img na tela.retira a imagem volta contagem a 1
        mostraItem.removeChild(achaImgParaDel)
        contagemLimiteItem = 1
    }
    if(item === 'pedra' && contagemLimiteItem == 1){
        img.src="img/pedrasemfundo.png"
        img.className = 'mostra-icon'
        mostraItem.appendChild(img)
        itemEscolidoPeloUsuario = "pedra"
    }
    if(item === 'papel' && contagemLimiteItem == 1){
        img.src="img/papelsemfundo.png"
        img.className = 'mostra-icon'
        mostraItem.appendChild(img)
        itemEscolidoPeloUsuario = "papel"
    }
    if(item === 'tesoura' && contagemLimiteItem == 1){
        img.src="img/tesourasemfundo.png"
        img.className = 'mostra-icon'
        mostraItem.appendChild(img)
        itemEscolidoPeloUsuario = "tesoura"
    }

}

    let contagem2 = 1

function geraItemAleatorio(){
    
    let achaImgParaDelComp = document.querySelector('.mostra-icon2',)
    let numero1A3 = parseInt(Math.random()*3)// 0 pedra , 1 papel , 2 tesoura
    let telaCompRight = document.querySelector('#item-sorteado');
    let img2 = document.createElement('img');
    img2.className = 'mostra-icon2'
    if (contagem2 === 2){
            telaCompRight.removeChild(achaImgParaDelComp)
            contagem2 -=1 
        }


        

    
    if(numero1A3 === 0){
        itemSorteado = 'pedra'
        img2.src="img/pedrasemfundo.png"
        telaCompRight.appendChild(img2)
        contagem2 +=1 
    } else if(numero1A3 === 1){
        itemSorteado = 'papel'
        img2.src="img/papelsemfundo.png"
        telaCompRight.appendChild(img2)
        contagem2 +=1 
    } else if(numero1A3 === 2){
        itemSorteado = 'tesoura'
        img2.src="img/tesourasemfundo.png"
        telaCompRight.appendChild(img2)
        contagem2 +=1 
    }



    console.log(itemSorteado)


}