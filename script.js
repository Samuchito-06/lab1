const secciones = document.querySelectorAll("section");

const mostrarSeccion = () => {

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        const alturaPantalla = window.innerHeight;

        if(posicion < alturaPantalla - 100){

            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0)";

        }

    });

};

secciones.forEach(seccion => {

    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(50px)";
    seccion.style.transition = "0.8s ease";

});

window.addEventListener("scroll", mostrarSeccion);

mostrarSeccion();

const titulo = document.querySelector("h1");

const texto = titulo.textContent;

titulo.textContent = "";

let i = 0;

function escribir(){

    if(i < texto.length){

        titulo.textContent += texto[i];

        i++;

        setTimeout(escribir,100);

    }

}

escribir();

const boton = document.createElement("button");

boton.textContent = "↑";

boton.className = "subir";

document.body.appendChild(boton);

boton.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});