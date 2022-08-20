const doc = (element) => document.querySelector(element); 

window.addEventListener('scroll', decidirBotaoScrool)

function decidirBotaoScrool(){
    if(window.scrollY === 0 ){
        doc('.subirTopo').style.display = 'none';
        doc('.surpresa').style.display = 'none';
    }else{
        doc('.subirTopo').style.display = 'flex';
    }
}

function moverTopo(){
    window.scrollTo({
        top:0,
        left: 0,
        behavior: 'smooth'
    })

   
}

function chamarRaiz(){
    doc('.surpresa').style.display = 'flex';
}