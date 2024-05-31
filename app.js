// ---------------------------------->BAKRA-EID DAYS COUNTER<---------------------------------------------

let timer = document.getElementById('timer')
let sec = 60
let min = 60
let hours= 443
let days = 18
let start= document.getElementById('start')
let Pause= document.getElementById('Pause')
let clear;

function starter(){
    sec--
    if(sec < 0){
        min--
        sec=60
    }
    if(min < 0){
        hours--
        min=60
    } 
    
    if(hours < 0){
        days--
        hours=23
    } 


    timer.innerText=` ${days} : ${hours} : ${min} : ${sec}`
}


function on(){
    
    clear = setInterval(starter,1000)
    start.setAttribute('disabled','disabled')
    Pause.removeAttribute('disabled','disabled')



}
function off(){
    
clearInterval(clear)
start.removeAttribute('disabled','disabled')
Pause.setAttribute('disabled','disabled')

}







