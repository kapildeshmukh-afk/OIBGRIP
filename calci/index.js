var screen=document.querySelector('#screen')
var btn = document.querySelectorAll('.btn')
for ( i of btn) {
    i.addEventListener('click', (e) =>{
        buttonText =  e.target.innerText 
        if (buttonText=='x'){
            buttonText='*';
        }
        screen.value += buttonText;
    });
    function sqrt(){
        screen.value = Math.sqrt(screen.value)
    }
    function log(){
        screen.value = Math.log(screen.value)
    }
    function backSpace(){
        screen.value = screen.value.substr(0,screen.value.length-1)
    }
    function powerOf(){
       
        screen.value = eval(screen.value**2);
}
}