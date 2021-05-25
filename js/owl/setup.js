$('.owl-carousel').owlCarousel({
    loop:true,//um efeito de lup ai navego de forma infinita puixando o tempo todo se eu bota flase ele para no ultimo filme
    margin:10,//distancia da caixa no caso das imagem
    nav:true,//e um botao de navegacao no true fica <> essa seta e no false fica as bolinha
    responsive:{//se adapita ao tamanho da tela
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
//o sifrao $ ele abre o espaco para voce bota a configurao em tela