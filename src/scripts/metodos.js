/*Adicione seu codigo abaixo */

// filter 
let numeros = [19,3,6,5,7,78,9,1,2,3,4,6,7,8,9]
console.log(numeros)

function callBackFilter (numeros) {
    return numeros < 7
}
function metodoFilter (array, callBack) {
    let numerosMenoresQue7 = []
    for (i = 0; i < array.length; i++){

        let numeroscallback = callBack(array[i])
        if (numeroscallback) { numerosMenoresQue7.push(array[i])}
        
    }
    return numerosMenoresQue7
}
console.log(metodoFilter(numeros, callBackFilter))

// map 
let numerosMap = []

function callBackMAp(numeros) {

    return numeros*2
}
function metodoMAp (array, callBackM){

    for (i = 0; i < array.length; i++){

       let numerocallback = callBackM(array[i])
       numerosMap.push(numerocallback)

    }
    return numerosMap
}

console.log(metodoMAp(numeros, callBackMAp))




// find 

function callBackFind (numero) {
   return numero % 2 == 0
}
function metodoFind (array, callback) {

    for (i = 0; i < array.length; i++){

        if (callback(array[i])) { return array[i]}
        
    }
    return 'inválido'
   
}
console.log(metodoFind(numeros, callBackFind))

// function reduce



function callBackReduce (acumulador, valorAtual) {
    
    acumulador += valorAtual
    
    return acumulador

}



function metodoReduce (array, callBack) {
    let total = 0
    
    for (let i=0; i<array.length; i++){

       if ( i == 0) { total = callBack(0, array[i])}


       else { total = callBack(total, array[i])}

    }
    return total
}
console.log(metodoReduce(numeros,callBackReduce))


//includes


function includesCallBack () {
 
   return [19,0,6]
}
console.log(includesCallBack())


function metodoIncludes (array, callBack) {

    let comparador = []

    for ( let i= 0 ; i < callBack.length; i ++ ) {

        for ( let j = 0; j < array.length; j++){
            
            if (callBack[i] == array[j]) {
                comparador.push(array[j])
                array.splice(j, 1)
                console.log(array)
                break;
            }
        }

    }
    
    if ( comparador.length == callBack.length) { return true}
    else {return false}
    

}
console.log(metodoIncludes(numeros, includesCallBack()))


//indexOf
function callBackIndiceOf (){
    return 8
}
function metodoIndiceOf (array, callBack) {

    for (let i=0; i<array.length; i++){
       
        if (array[i]== callBack){return i}
    }
    return -1 
}
console.log(metodoIndiceOf(numeros, callBackIndiceOf()))


