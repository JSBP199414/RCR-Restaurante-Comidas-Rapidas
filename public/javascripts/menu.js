"use stritc"

function showContent() {

    sub1 = document.getElementById("cajaUno");
    sub2 = document.getElementById("cajaDos");
    sub3 = document.getElementById("cajaTres");
    sub4 = document.getElementById("cajaCuatro");
    sub5 = document.getElementById("cajaCinco");

    check = document.getElementById("botonUno"); 
    check2 = document.getElementById("botonDos");
    check3 = document.getElementById("botonTres");
    check4 = document.getElementById("botonCuatro");
    check5 = document.getElementById("botonCinco");

    if(check.checked && check2.checked == false && check3.checked == false && check4.checked == false && check5.checked == false) {
        sub1.style.display = 'flex';
        sub2.style.display ='none';
        sub3.style.display='none';
        sub4.style.display ='none';
        sub5.style.display='none';
    }else if (check.checked == false && check2.checked && check3.checked == false && check4.checked == false && check5.checked == false) {
        sub1.style.display = 'none';
        sub2.style.display ='flex';
        sub3.style.display='none';
        sub4.style.display ='none';
        sub5.style.display='none';
    }else if (check.checked == false && check2.checked == false && check3.checked && check4.checked == false && check5.checked == false) {
        sub1.style.display = 'none';
        sub2.style.display ='none';
        sub3.style.display='flex';
        sub4.style.display ='none';
        sub5.style.display='none';
    }else if(check.checked == false && check2.checked == false && check3.checked == false && check4.checked  && check5.checked == false){
        sub1.style.display = 'none';
        sub2.style.display ='none';
        sub3.style.display='none';
        sub4.style.display ='flex';
        sub5.style.display='none';
    }else if(check.checked == false && check2.checked == false && check3.checked == false && check4.checked == false  && check5.checked){
        sub1.style.display = 'none';
        sub2.style.display ='none';
        sub3.style.display='none';
        sub4.style.display ='none';
        sub5.style.display='flex';
    }else{
        sub1.style.display = 'none';
        sub2.style.display ='none';
        sub3.style.display='none';
        sub4.style.display ='none';
        sub5.style.display='none';
    }
}

   