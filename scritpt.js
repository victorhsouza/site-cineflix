let carrossel2 = document.querySelector('.carrossel-2')
let slides = document.querySelectorAll('.slide')

let btnDireito = document.querySelector('.direita')
let btnEsquerda = document.querySelector('.esquerda')


let slideAtual2 = 0

btnDireito.addEventListener('click', ()=>{
    slideAtual2++
    if(slideAtual2 > slides.length - 1){
        slideAtual2 = 0
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

btnEsquerda.addEventListener('click', ()=>{
    slideAtual2--

    if(slideAtual2 < 0){
        slideAtual2 = slides.length - 1
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

