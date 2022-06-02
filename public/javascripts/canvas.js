"use strict"

const canvas = document.querySelector('canvas');
//Contexto canvas
const contexto = canvas.getContext('2d');

let boombasArray=[];
let pizzasArray=[];


/**-----------------------------Actualizar Canvas game--------------------------*/
//Dentro de la funcion actualizarPantalla colocamos el dibujo de fondo hecho con CANVAS
function actualizarPantalla() {

/**------------------------------------------CANVAS: FONDO DE LA IMAGEN-------------------------------------------- */
//Relleno de cuadro
contexto.fillStyle= '#8FC2F2';
contexto.fillRect(500,100,500,500);//(coordenada x, coordenada y, ancho, alto)
//Border del cuadrado
contexto.lineWidth = 9;
contexto.strokeStyle='#95AFFC';
contexto.rect(500,100,500,500);//(coordenada x, coordenada y, ancho, alto)
contexto.stroke();

/**---------------------------CANVAS IMAGEN COCINA (FONDO NEVERA)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(550,125);
//Coordenadas
contexto.lineTo(950,125);
contexto.lineTo(950,125);
contexto.lineTo(950,275);
contexto.lineTo(950,275);
contexto.lineTo(550,275);

let gradienteCero = contexto.createLinearGradient(550,125,1000,600);
gradienteCero.addColorStop(0,'white');
gradienteCero.addColorStop(0.5,'gray');
gradienteCero.addColorStop(1,'darkgray');
contexto.fillStyle =gradienteCero;
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='darkgray';
contexto.stroke();

/**---------------------------CANVAS IMAGEN COCINA (CIRCULOS CHEF)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.arc(750,315,90,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='white';
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='gray';
contexto.stroke();

//Trazo de linea
contexto.beginPath();
contexto.arc(750,200,40,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='#F8D0AE';
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='#F9E0C7';
contexto.stroke();

//Trazo de linea(MANOS)
contexto.beginPath();
contexto.arc(700,350,20,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='#FAB15D';
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='#F9E0C7';
contexto.stroke();

//Trazo de linea(MANOS)
contexto.beginPath();
contexto.arc(800,350,20,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='#FAB15D';
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='#F9E0C7';
contexto.stroke();

//Trazo de linea(BOTONES)
contexto.beginPath();
contexto.arc(750,275,7,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='black';
contexto.fill();
//Border al circulo
contexto.lineWidth =3
contexto.strokeStyle='gray';
contexto.stroke();

//Trazo de linea(BOTONES)
contexto.beginPath();
contexto.arc(750,300,7,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='black';
contexto.fill();
//Border al circulo
contexto.lineWidth =3
contexto.strokeStyle='gray';
contexto.stroke();

//Trazo de linea(BOTONES)
contexto.beginPath();
contexto.arc(750,325,7,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='black';
contexto.fill();
//Border al circulo
contexto.lineWidth =3
contexto.strokeStyle='gray';
contexto.stroke();

/**---------------------------CANVAS IMAGEN COCINA (CURVAS CHEF)-----------------------------*/
contexto.beginPath();
contexto.moveTo(725,250);
//Dibujando la curva
contexto.quadraticCurveTo(675,300,700,325)
contexto.lineWidth =2
contexto.strokeStyle='gray';
contexto.stroke();

contexto.beginPath();
contexto.moveTo(775,250);
//Dibujando la curva
contexto.quadraticCurveTo(825,300,800,325)
contexto.lineWidth =2
contexto.strokeStyle='gray';
contexto.stroke();

/**---------------------------CANVAS IMAGEN COCINA (CHEF SOMBRERO CUADRADO)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(725,175);
//Coordenadas
contexto.lineTo(775,175);
contexto.lineTo(775,175);
contexto.lineTo(775,125);
contexto.lineTo(775,125);
contexto.lineTo(725,125);
contexto.lineTo(725,125);
contexto.lineTo(725,175);
//Estilo y linea
contexto.lineWidth =3
contexto.strokeStyle='white';
contexto.stroke();
//Estilo relleno
contexto.fillStyle='white';
contexto.fill();

/**---------------------------CANVAS IMAGEN COCINA (CHEF SOMBRERO ELIPSE)-----------------------------*/
//Trazo de linea(SOMBRERO)
contexto.beginPath();
contexto.ellipse(750,125,20,55,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:750px, y:15px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='white';
contexto.fill();

//Trazo de linea(SOMBRERO)
contexto.beginPath();
contexto.ellipse(750,175,20,30,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:750px, y:15px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='white';
contexto.fill();

/**---------------------------CANVAS IMAGEN COCINA (ESTUFA-FONDO)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(500,400);//Trazo de movimineto en coordenada(x:500px, y:400px)
//Coordenadas
contexto.lineTo(1000,400);
contexto.lineTo(1000,400);//Volvemos a colocar el punto de inicio
contexto.lineTo(1000,600);
contexto.lineTo(1000,600);//Volvemos a colocar el punto de inicio
contexto.lineTo(500,600);
//Estilo y linea
//contexto.lineWidth =5
//contexto.strokeStyle='rgb(248,141,57,1)';
//contexto.stroke();
//Estilo relleno
//contexto.fillStyle='rgb(238,249,217,1)';
let gradiente = contexto.createLinearGradient(650,400,1000,600);
gradiente.addColorStop(0,'#F59E48');
gradiente.addColorStop(0.5,'#F4DCBE');
gradiente.addColorStop(1,'#F59E48');
contexto.fillStyle =gradiente;
contexto.fill();

/**---------------------------CANVAS IMAGEN COCINA (MESA FONDO)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(500,400);//Trazo de movimineto en coordenada(x:500px, y:400px)
//Coordenadas
contexto.lineTo(600,350);
contexto.lineTo(600,350);//Volvemos a colocar el punto de inicio
contexto.lineTo(900,350);
contexto.lineTo(900,350);//Volvemos a colocar el punto de inicio
contexto.lineTo(1000,400);
//Estilo y linea
contexto.lineWidth =2
contexto.strokeStyle='rgb(217,99,50,1)';
contexto.stroke();
//Estilo relleno
contexto.fillStyle='rgb(217,99,50,1)';
contexto.fill();

/**---------------------------CANVAS IMAGEN COCINA (MESA BORDE)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(500,400);//Trazo de movimineto en coordenada(x:500px, y:400px)
//Coordenadas
contexto.lineTo(600,350);
contexto.lineTo(600,350);//Volvemos a colocar el punto de inicio
contexto.lineTo(900,350);
contexto.lineTo(900,350);//Volvemos a colocar el punto de inicio
contexto.lineTo(1000,400);
//Estilo y linea
contexto.lineWidth =5
contexto.strokeStyle='#D9B234';
contexto.stroke();

/**---------------------------CANVAS IMAGEN MESA (INGREDIENTES)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(850,300);//Trazo de movimineto en coordenada(x:500px, y:400px)
//Coordenadas
contexto.lineTo(900,300);
contexto.lineTo(900,300);
contexto.lineTo(900,375);
contexto.lineTo(850,375);
//Estilo y linea
contexto.lineWidth =1
contexto.strokeStyle='white';
contexto.stroke();
//Gradiente
let gradienteUno = contexto.createLinearGradient(850,300,1000,600);
gradienteUno.addColorStop(0,'white');
gradienteUno.addColorStop(0.2,'darkgray');
gradienteUno.addColorStop(1,'black');
contexto.fillStyle =gradienteUno;
contexto.fill();

//Trazo de linea(TOMATES)
contexto.beginPath();
contexto.arc(900,375,12,0,2*Math.PI);
//Rellenamos circulo
contexto.fillStyle='#F53B23';
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='#DE1428';
contexto.stroke();

//Trazo de linea(TOMATES)
contexto.beginPath();
contexto.arc(875,370,12,0,2*Math.PI);
//Rellenamos circulo
contexto.fillStyle='#F53B23';
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='#DE1428';
contexto.stroke();

//Trazo de linea(VERDURA)
contexto.beginPath();
contexto.arc(890,380,12,0,2*Math.PI);
//Rellenamos circulo
contexto.fillStyle='#2CD40B';
contexto.fill();
//Border al circulo
contexto.lineWidth =1
contexto.strokeStyle='#7BEB00';
contexto.stroke();

//Trazo de linea(VERDURA)
contexto.beginPath();
contexto.arc(925,378,12,0,2*Math.PI);
//Rellenamos circulo
contexto.fillStyle='#2CD40B';
contexto.fill();
//Border al circulo
contexto.lineWidth =1
contexto.strokeStyle='#7BEB00';
contexto.stroke();

//Trazo de linea(PIZZA)
contexto.beginPath();
contexto.ellipse(750,370,15,55,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#FACB9E';
contexto.fill();
//Border al circulo
contexto.lineWidth =4
contexto.strokeStyle='#FAD97B';
contexto.stroke();

//Trazo de linea(INGREDIENTE)
contexto.beginPath();
contexto.ellipse(850,380,13,18,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='white';
contexto.fill();

/**---------------------------CANVAS IMAGEN COCINA (ESTUFA HORNO)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(550,450);//Trazo de movimineto en coordenada(x:550px, y:450px)
//Coordenadas
contexto.lineTo(750,450);
contexto.lineTo(750,450);//Volvemos a colocar el punto de inicio
contexto.lineTo(750,550);
contexto.lineTo(750,550);//Volvemos a colocar el punto de inicio
contexto.lineTo(550,550);
//Estilo y linea
contexto.lineWidth =7
contexto.strokeStyle='#D9CC98';
contexto.stroke();
//Estilo relleno
contexto.fillStyle='rgb(69, 69, 69)';
contexto.fill();

/**---------------------------CANVAS IMAGEN COCINA (ESTUFA FONDO LINEAL)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(550,550);//Trazo de movimineto en coordenada(x:550px, y:550px)
//Coordenadas
contexto.lineTo(625,475);
contexto.lineTo(625,475);
contexto.lineTo(675,475);
contexto.lineTo(675,475);
contexto.lineTo(750,550);
//Estilo y linea
contexto.lineWidth =1
contexto.strokeStyle='#D9CC98';
contexto.stroke();

//Trazo de linea
contexto.beginPath();
contexto.moveTo(625,475);//Trazo de movimineto en coordenada(x:625px, y:475px)
//Coordenadas
contexto.lineTo(625,450);
contexto.lineTo(625,450);
contexto.lineTo(675,450);
contexto.lineTo(675,450);
contexto.lineTo(675,475);
//Estilo y linea
contexto.lineWidth =1
contexto.strokeStyle='#D9CC98';
contexto.stroke();

/**---------------------------CANVAS IMAGEN COCINA (ESTUFA BORDE)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.moveTo(800,450);//Trazo de movimineto en coordenada(x:800px, y:450px)
//Coordenadas
contexto.lineTo(950,450);
contexto.lineTo(950,450);//Volvemos a colocar el punto de inicio
contexto.lineTo(950,550);
contexto.lineTo(950,550);//Volvemos a colocar el punto de inicio
contexto.lineTo(800,550);
//Estilo y linea
contexto.lineWidth =2
contexto.strokeStyle='#D9CC98';
contexto.stroke();
//Estilo relleno
contexto.fillStyle='#F5C371';
contexto.fill();

/**---------------------------CANVAS IMAGEN COCINA (CIRCULOS ESTUFA)-----------------------------*/
//Trazo de linea
contexto.beginPath();
contexto.arc(650,425,12,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='black';
contexto.fill();
//Border al circulo
contexto.lineWidth =4
contexto.strokeStyle='gray';
contexto.stroke();

//Trazo de linea
contexto.beginPath();
contexto.arc(750,425,12,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='black';
contexto.fill();
//Border al circulo
contexto.lineWidth =4
contexto.strokeStyle='gray';
contexto.stroke();

//Trazo de linea
contexto.beginPath();
contexto.arc(550,425,12,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:450px, radio:5, 0 gradosx, a 365 grados)
//Rellenamos circulo
contexto.fillStyle='black';
contexto.fill();
//Border al circulo
contexto.lineWidth =4
contexto.strokeStyle='gray';
contexto.stroke();

/**---------------------------CANVAS IMAGEN COCINA (ELIPSE PIZZA)-----------------------------*/
//Trazo de linea(PIZZA)
contexto.beginPath();
contexto.ellipse(650,525,20,55,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#FACB9E';
contexto.fill();
//Border al circulo
contexto.lineWidth =4
contexto.strokeStyle='#FAD97B';
contexto.stroke();

//Trazo de linea(PIZZA SALSA)
contexto.beginPath();
contexto.ellipse(650,525,18,48,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#DE3228';
contexto.fill();
//Border al circulo
contexto.lineWidth =2
contexto.strokeStyle='#DE3228';
contexto.stroke();

//Trazo de linea(PIZZA INGREDIENTE)
contexto.beginPath();
contexto.ellipse(650,520,5,10,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#FAC978';
contexto.fill();

//Trazo de linea(PIZZA INGREDIENTE)
contexto.beginPath();
contexto.ellipse(630,530,5,10,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#FAC978';
contexto.fill();

//Trazo de linea(PIZZA INGREDIENTE)
contexto.beginPath();
contexto.ellipse(660,530,5,10,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#FAC978';
contexto.fill();

//Trazo de linea(PIZZA INGREDIENTE)
contexto.beginPath();
contexto.ellipse(685,520,5,10,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#FA990D';
contexto.fill();

//Trazo de linea(PIZZA INGREDIENTE)
contexto.beginPath();
contexto.ellipse(615,520,5,10,Math.PI/2,0,2*Math.PI);//Trazo de movimineto en coordenada(x:650px, y:525px, radio-y:20, radio-x:55,Math.PI/2, 0 gradosx, a 365 grados)
//Estilo relleno
contexto.fillStyle='#FA990D';
contexto.fill();
    
}
/**-----------------------------Creamos protagonista del game--------------------------*/
const protagonista = function (posX,posY,radio,comienzoAngulo,finalAngulo,color,velocidad,derecha) {
    this.posX =posX;
    this.posY =posY;
    this.radio =radio;
    this.comienzoAngulo =comienzoAngulo;
    this.finalAngulo = finalAngulo;
    this.color =color;
    this.velocidad=velocidad;


    this.dibujarPantalla=function (){
        contexto.beginPath();
        contexto.arc(this.posX,this.posY,radio,comienzoAngulo,finalAngulo,this.color,this.velocidad)
        contexto.fillStyle = color;
        contexto.fill();
        //let fotoChef = new Image()
        //fotoChef.src='../images/Pizza.png'
        //contexto.drawImage(fotoChef,this.posX,this.posY,this.ancho,this.alto)
    }
    this.izquierda=function () {
        if (this.posX<510) {
            this.posX+=5;
        }else{
            this.posX-=5;
        }
    }
    this.derecha=function () {
        if (this.posX>980) {
            this.posX-=5;
        }else{
            this.posX+=5;
        }
    }
}
const nuevoPro = new protagonista(750,585,10,0,2*Math.PI,'#95DBFD',2.5)

/**-------------------------------MOVIMIENTOS DEL PROTAGONISTA------------------------------ */
 window.addEventListener('keydown',(e)=>{
     e.preventDefault

     if (e.key==="A" ||e.key==="a" ) {
        nuevoPro.izquierda()
     }
     if (e.key==="D" ||e.key==="d" ) {
        nuevoPro.derecha()
     }
 })

/**-----------------------------Creamos  enemigo del game--------------------------
const enemigo = function (posX,posY,ancho,alto,color,velocidad,derecha) {
    this.posX =posX;
    this.posY =posY;
    this.ancho =ancho;
    this.alto =alto;
    this.color = color;
    this.velocidad=velocidad;
    this.derecha=true;

    this.dibujarPantalla=function (){
        contexto.fillStyle = 'blue';
        contexto.fillRect(this.posX,this.posY,this.ancho,this.alto,this.color,this.velocidad)
    }
    this.mover=function () {
        if (this.derecha) {
            if(this.posX<1000-10)
            this.posX +=5;
            else{
                this.derecha=false
            }
        }else{
            if(this.posX>500)
            this.posX-=5;
            else{
                this.derecha=true;
            }
        }
        
    }
}
const nuevoEne = new enemigo(750,100,10,10,'blue',2)*/

/**-----------------------------Creamos  pizzas del game--------------------------*/
const pizzas = function (posX,posY,radio,comienzoAngulo,finalAngulo,color,velocidad,derecha) {
    this.posX =posX;
    this.posY =posY;
    this.radio =radio;
    this.comienzoAngulo =comienzoAngulo;
    this.finalAngulo = finalAngulo;
    this.color =color;
    this.velocidad=velocidad;
    this.derecha=true;

    this.dibujarPantalla=function (){
        contexto.beginPath();
        contexto.arc(this.posX,this.posY,radio,comienzoAngulo,finalAngulo,this.color,this.velocidad)
        contexto.fillStyle = color;
        contexto.fill();
    }
    this.abajo=function () {
            this.posY +=1 + this.velocidad;
            if(this.posY > 600)
            this.posY = 125;
    }
}
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',.5))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',1.2))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',1.5))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',3))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',3))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',2.1))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',1.4))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',.6))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',.7))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',.4))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',1))
pizzasArray.push(new pizzas((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'#FAC978',.7))


/**-----------------------------Creamos  boombas del game--------------------------*/
const bomba = function (posX,posY,radio,comienzoAngulo,finalAngulo,color,velocidad,derecha) {
    this.posX =posX;
    this.posY =posY;
    this.radio =radio;
    this.comienzoAngulo =comienzoAngulo;
    this.finalAngulo = finalAngulo;
    this.color =color;
    this.velocidad=velocidad;
    this.derecha=true;

    this.dibujarPantalla=function (){
        contexto.beginPath();
        contexto.arc(this.posX,this.posY,radio,comienzoAngulo,finalAngulo,this.color,this.velocidad)
        contexto.fillStyle = color;
        contexto.fill();
    }
    this.abajo=function () {
            this.posY +=1 + this.velocidad;
            if(this.posY > 600)
            this.posY = 125;
    }
}
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',1))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',.8))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',1.8))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',2))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',2.2))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',1.5))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',.8))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',1.7))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',.8))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',.4))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',3))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',2.3))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',.9))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',1.6))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',1))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',.2))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',1))
boombasArray.push(new bomba((Math.random()*1000)+500,(Math.random()*100)+200,10,0,2*Math.PI,'black',.7))
 
/**-----------------------------MARCADOR--------------------------*/
const puntuacion = document.querySelector('#puntuacion');
const vidas = document.querySelector('#vidas');
const record = document.querySelector('#record');

let puntuacionVariable =0;
let vidasJuego =2;
let recordFinal =0;

puntuacion.textContent = puntuacionVariable;
vidas.textContent = vidasJuego;
record.textContent=localStorage.getItem('record');


/**-----------------------------FUNCION COLISIONES--------------------------*/

function colisiones() {
    boombasArray.map(boombaArray=>{

        //Colision con las bombas
        if (nuevoPro.posY <= boombaArray.posY + 10 && nuevoPro.posX  >=boombaArray.posX  && nuevoPro.posX <=boombaArray.posX +10 ) {
            boombaArray.posY =125;
            boombaArray.posX = ((Math.random()*1000)+500);

            vidas.textContent = vidasJuego -=1;

            if (vidasJuego <=0) {
                vidas.textContent =0;
                puntuacion.textContent= 0;
                record.textContent = puntuacionVariable;
                swal("Puntuacion " + puntuacionVariable);

            if (puntuacionVariable > recordFinal) {
                localStorage.setItem('record',puntuacionVariable); 
            }
        }
        }

    })
    
}
colisiones()

/**-----------------------------FUNCION COLISIONES CON PIZZAS--------------------------*/

function colisionesSuma() {
    pizzasArray.map(pizzaArray=>{

        //Colision con las pizzas
        if (nuevoPro.posY <= pizzaArray.posY + 10 && nuevoPro.posX  >=pizzaArray.posX  && nuevoPro.posX <=pizzaArray.posX +10 ) {
            pizzaArray.posY =125;
            pizzaArray.posX = ((Math.random()*1000)+500);

            puntuacion.textContent = puntuacionVariable +=1;
        }

    })
    
}
colisionesSuma()

/**-----------------------------------------------BUCLE PRINCIPAL DE GAME------------------------------------------ */
function principal() {
    //Metodo que se repite intermitentemente
    requestAnimationFrame(principal)
    actualizarPantalla()
    nuevoPro.dibujarPantalla()
    //nuevoEne.dibujarPantalla()
    //nuevoEne.mover()
    colisiones()
    colisionesSuma()
   

    for (let i = 0; i < boombasArray.length; i++) {
        boombasArray[i].dibujarPantalla();
        boombasArray[i].abajo(); 
    }

    for (let i = 0; i < pizzasArray.length; i++) {
        pizzasArray[i].dibujarPantalla();
        pizzasArray[i].abajo(); 
    }
   
}
principal()