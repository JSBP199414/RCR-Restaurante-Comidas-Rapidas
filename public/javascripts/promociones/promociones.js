/**/ 
$(document).ready(function(){
    var alto =$(window).height();
    var ancho =$(window).width();
    if (alto>ancho) {
        $("html").addClass("vr");
    }

    var controller = new ScrollMagic.Controller();

    /*------------------------------SCENE-0----------------------------------*/
    /*GifWalk(Y):Scene-0:Offset-Position GIF--Duretion:Duracion-alto*/
    var gifWalk = new ScrollMagic.Scene({triggerElement:"#", offset: alto/3, duration:alto*1.3})
    .setPin("#caminar")
    //.addIndicators() //addIndicators:Indicadores de posicion 
    .addTo(controller);
    /*------------------------------SCENE-1----------------------------------*/
    /*GifWalk(X):Scene-1:Offset-Position GIF--Duretion:alto*/
   var chicken = new TimelineMax()
   .add([
       TweenMax.fromTo("#caminar", 1, {x: 0}, {x: ancho/2}),//id:img--1:Cuadros--x:0-Posicion--x:ancho/2-Desplazamiento
       TweenMax.fromTo("#caminar", 1, {opacity: 1}, {opacity: 0}),//opacity:1-Opacidad inicial--opacity:0-Opacidad fianl
   ]);
     var chickenWalk = new ScrollMagic.Scene({triggerElement:"#escenaCero", offset:alto/8, duration:alto/4})
    .setTween(chicken)//setTween(chicken)--Se guarda en variable chicken para desplazamiento en X
    //.addIndicators()
    .addTo(controller);  

    /*------------------------------SCENE-2----------------------------------*/
    /*Restaurant(Y):Scene-2:Offset-Position GIF--Duretion:alto*/
    var walk = new TimelineMax()
   .add([
       TweenMax.fromTo("#restaurante", 1, {y: 0}, {y: (alto/1.5)}),//id:img--1:Cuadros--y:0-Posicion--y:alto-Desplazamiento
       
   ]);
    var restauranteOpen = new ScrollMagic.Scene({triggerElement:"#escenaUno", offset:-300, duration:alto/2})
    .setTween(walk)//setTween(chicken)--Se guarda en variable chicken para desplazamiento en X
    //.addIndicators()
    .addTo(controller);  
    
    /*------------------------------SCENE-2----------------------------------*/
    /*Restaurant(Y):Scene-2:Offset-Position GIF--Duretion:alto*/
   var food = new TimelineMax()
   
    .add([
        TweenMax.fromTo("#imagenUno", 1, {x: 0}, {x: -ancho/3}),
        TweenMax.fromTo("#imagenUno", 1, {opacity: 0}, {opacity: 1}),
        TweenMax.fromTo("#imagenDos", 1, {x: 0}, {x: -ancho/3}),
        TweenMax.fromTo("#imagenDos", 1, {opacity: 0}, {opacity: 1}),
        TweenMax.fromTo("#imagenTres", 1, {x: 0}, {x: -ancho/3}),
        TweenMax.fromTo("#imagenTres", 1, {opacity: 0}, {opacity: 1}),

    ]);
   var restaurante = new ScrollMagic.Scene({triggerElement:"#escenaUno", offset:1, duration:alto/6})
   .setTween(food)
   //.addIndicators()
   .addTo(controller); 

});