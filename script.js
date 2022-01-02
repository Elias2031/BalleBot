//Criei a variavel "move" para que ela seja a refernecia do estado do meu menu
//se move é igual a 'translateX(100%)' o menu esta escondido 
//se move é igual a 'translateX(0)' o menu está visivel 
let move = 'translateX(100%)'

function chamaMenu(){
    if (move == 'translateX(100%)'){
        document.getElementById('menu_lista').style.transform = 'translateX(0)'
        move = 'translateX(0)'
    }else{
        document.getElementById('menu_lista').style.transform = 'translateX(100%)'
        move = 'translateX(100%)'
    }
}