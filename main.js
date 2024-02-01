
/* document.querySelector('.tecla_pom')
document. -> seleciona todo o dodumento
querySelector -> seleciona um determinado elemento 
('.tecla_pom') -> seleciona o elemento cuja classe é tecla_pom poderia secionar um id bastaria botar:
#nome_elemento  */

//const tecla_pom = document.querySelector('.tecla_pom')

const listaTeclas = document.querySelectorAll('.tecla')//seleciona todos os elementos com a classe tecla

function  tocaSom(idElementoAudio){
    const elemento = document.querySelector(idElementoAudio)

    if(elemento === null){
        //alert('Elemento não encontrado')
        console.log('elemento não encontrado')
    }
    if(elemento != null && elemento.localName === 'audio' ){//local name retorna o nome do elemento se for audio entra na condicao
        //console.log(elemento.localName)
        document.querySelector(idElementoAudio).play()   
    }else{
        console.log("Erro")
    }

}



for(let i = 0; i<= listaTeclas.length; i++){
    const tecla = listaTeclas[i]
    const instrumento = tecla.classList[1] // .classList retorna a lista de classes do elemento // classList[0] mostra a classe tecla classList[1] mostra a classe dinamica
    //template string
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function (){
        tocaSom(idAudio) 
    }//função anonima é usada quando vc quer fazer uma atribuição dinâmica sem executar de imediato a função
    

    tecla.onkeydown = function (evento){// onkeydown evento qualquer tecla do teclado estiver pressionada
        console.log(evento.code)
        if(evento.code === 'Space'|| evento.code === 'Enter' ){
            tecla.classList.add('ativa')
        }
            
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa')
    }

}

//forma de fazer tecla por tecla mais trabalhosa
 function reproduzirSomPom(){
//     // console.log(tecla_pom)
     document.querySelector('#som_tecla_pom').play()//selciona o elemento de id som_tecla_pom e executa a função
//     //mostrando o som
 }
