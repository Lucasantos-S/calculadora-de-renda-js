 let renda = document.getElementById('rend')
 let despesa = document.getElementById('desp')
 let rlista = document.getElementById('rlis')
 let res = document.getElementById('res')
 let des = []
 let rend = []
 let botaocalcular = document.getElementById('botaodecalcular')
 let erro = document.getElementById('erro')


///função para pegar os array
 function isNumber(n){
    if(Number(n)) {
       return true
    } else {
       return false
    }
 
 }

 
 
///incluido o array de renda na tela
function adicionarRenda () {
    if(isNumber(renda.value)) {
    rend.push(Number(renda.value))
    des.push(Number(despesa.value))
    let item = document.createElement('option')
    
    item.text = `- Valor de R$:${renda.value} adicionado em renda familiar`
    rlista.appendChild(item)
     
   
    
    res.style.display='none'
    }
    erro.style.display = 'none' //Retirar o alerta de erro ao adicionar
    renda.value = ''
}

///incluido o array de despesas na tela
function adicionarDespesas() {
        if(isNumber(despesa.value)) {
        des.push(Number(despesa.value))
         let item = document.createElement('option')
         item.style.background = 'red'
         item.text = `- Valor de - R$:${despesa.value} retirado em despesas`
         rlista.appendChild(item)
         
         
         res.style.display='none'
        }

        erro.style.display = 'none' //Retirar o alerta de erro ao adicionar
    
        
        despesa.value = ''
    
    }

    function limparcampo () {
        rlista.innerHTML= ''
        des = []
        rend = []

    }

   /// função para pegar os valores
    
    function soma(familia) {
        let total = 0 
        for(let valor of familia) {
            total += valor
        }
        return  total

        
    }
    
// Botao para calcular as dispesas
    
function calcular(){ 


   
    let total = soma(rend) - soma(des)
    
    if( Number(rend) == 0 || Number(des) == 0 ) {
        erro.style.display = 'block'
    } else if(total >0) {
        res.style.display='block'
        form.style.display = 'none'
        botaodecalcular.style.display = 'none'
        document.body.style.background= '#0000FF'
        retorno.style.display = 'block'
        res.innerHTML+= `SALDO POSITVO`
        res.innerHTML+= ` <p> O final e de: R$${total.toFixed(2)}</p>`
       
    } else {
        res.style.display='block'
        form.style.display = 'none'
        botaodecalcular.style.display = 'none'
        document.body.style.background= '#FF0000'
        retorno.style.display = 'block'
        res.innerHTML+= `SALDO NEGATIVO \u{2716}`
        res.innerHTML+= `<p> O saldo negativo e de: R$${total.toFixed(2)}</p> `
    }

    
    
///Boatao para voltar ao formulario
}

function voltar() {
    form.style.display = ''
    form.style.transition= '1s;'
    res.style.display='none'
    retorno.style.display = 'none'
    res.innerHTML = ''
    botaodecalcular.style.display = 'block'
    document.body.style.background= '#110808bd'
}

retorno.setAttribute ('value', `\u{2B05}` )
  

   





