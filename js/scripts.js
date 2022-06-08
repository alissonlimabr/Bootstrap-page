// Inicializa Jquery
$(document).ready(function() {

    let ContainerA = document.getElementById("circleA");

    // recebe o objeto de Circle da Biblioteca de progress loader
    let circleA = new ProgressBar.Circle(ContainerA, {

        color: '#64DAF9',
        // largura da borda do círculo (stroke)
        strokeWidth: 8,
        duration: 1400,
        // Propriedade que define a cor inicial e final
        from: {color: '#AAA'},
        to: {color: '65DAf9'},

        // Faz, de fato, o passo da animação
        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);

            let value = Math.round(circle.value() *80);

            circle.setText(value);
        }
    });

    circleA.animate(1.0);

});