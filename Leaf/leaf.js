(function Main(){
    // comando step roda para cada iteração e para cada propriedade em animate
    var animate = function animeObjs(){
    };

    animate.prototype = {
        animacao: function anime(Doom, time, rotate){
            Doom.animate({
                opacity: 1,
                top: "100%",

            }, {
                complete: function(){
                    this.style.top = '0px';
                    anime(Doom, time, rotate);
                },
                duration: time,
                easing: 'linear',
                step: function(now){
                    Doom.css({
                        opacity:1 - now/100,
                        transform: 'rotate(' + rotate * now + 'deg)'
                    })
                }

            })

        }
    }


    var animacao1 = new animate();
    animacao1.animacao($( '.Container #one' ), 5000, 1);
    var animacao2 = new animate();
    animacao2.animacao($( '.Container #two' ), 3000, 4);
    var animacao3 = new animate();
    animacao3.animacao($( '.Container #three' ), 8500, 3);
    var animacao4 = new animate();
    animacao4.animacao($( '.Container #four' ), 4000, 5);
    var animacao5 = new animate();
    animacao5.animacao($( '.Container #five' ), 6000, 4);
    var animacao6 = new animate();
    animacao6.animacao($( '.Container #six' ), 3000, 4);
    var animacao7 = new animate();
    animacao7.animacao($( '.Container #seven' ), 6000, 1);
    var animacao8 = new animate();
    animacao8.animacao($( '.Container #eight' ), 7000, 4);
    var animacao9 = new animate();
    animacao9.animacao($( '.Container #nine' ), 6000, 4);

})();






