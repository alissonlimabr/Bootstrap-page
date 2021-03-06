// Inicializa Jquery
$(document).ready(function() {

    let ContainerA = document.getElementById("circleA");

    // recebe o objeto de Circle da Biblioteca de progress loader
    let circleA = new ProgressBar.Circle(ContainerA, {

        color: '#64DAF9',
        // largura da borda do círculo (stroke)
        strokeWidth: 10,
        duration: 1400,
        // Propriedade que define a cor inicial e final
        from: {color: '#AAA'},
        to: {color: '#65DAf9'},

        // Faz, de fato, o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() *46);

            circle.setText(value);
        }
    });

    // CircleB
    let ContainerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(ContainerB, {

        color: '#64DAF9',
        // largura da borda do círculo (stroke)
        strokeWidth: 10,
        duration: 1800,
        // Propriedade que define a cor inicial e final
        from: {color: '#AAA'},
        to: {color: '#65DAf9'},

        // Faz, de fato, o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() *140);

            circle.setText(value);
        }
    });

    let ContainerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(ContainerC, {

        color: '#64DAF9',
        // largura da borda do círculo (stroke)
        strokeWidth: 10,
        duration: 2000,
        // Propriedade que define a cor inicial e final
        from: {color: '#AAA'},
        to: {color: '#65DAf9'},

        // Faz, de fato, o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() *356);

            circle.setText(value);
        }
    });

    let ContainerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(ContainerD, {

        color: '#64DAF9',
        // largura da borda do círculo (stroke)
        strokeWidth: 10,
        duration: 2300,
        // Propriedade que define a cor inicial e final
        from: {color: '#AAA'},
        to: {color: '#65DAf9'},

        // Faz, de fato, o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() *459);

            circle.setText(value);
        }
    });

    // Iniciando loader de acordo com um ponto específico do Scroll da página
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        // variável que guarda a posição de scroll que o usuário está
        let scroll = $(window).scrollTop();
        // animação inicia se a posição scroll for maior que a área especiicada e se já não tiver sido
        // carregada anteriormente.
        if (scroll > (dataAreaOffset.top - 500) && stop == 0) {
  
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            // carrega a animação
            stop = 1;
        }
    });

    // Parallax da página
    // carrega todas as imagens da página
    setTimeout(function() {
        $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'})
        $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 250);

});