let servicios =["Hunters","Cafetería hunters","8vo piso","Baños" ]
const cardContainer=document.querySelector("#card-container")
const btnSumarCarro=document.querySelectorAll(".sumar-carro")
const logoCarrito=document.querySelector("#logo-carrito")
let carrito=[]

// script llenado dinamico
const sectionInicio=document.querySelector(".comienzo");
const btnServicios=document.querySelector("#btn-servicios");
const sectionServicios=document.querySelector("#servicios")
const btnInicio=document.querySelector("#btn-inicio")
const cafeteria=document.querySelector(".cafeteria-virtual")
const btnCafeteria=document.querySelector("#btn-cafeteria")

btnServicios.addEventListener("click",(e)=>{
    sectionInicio.style.display="none";
    sectionServicios.style.display="block";
    cafeteria.style.display="none"
    cardContainer.innerHTML=null;
    servicios.forEach(servicio => {
        let cartaCreada= document.createElement(`div`);
        cartaCreada.className = "card";
        cartaCreada.innerHTML=`<p>${servicio}</p>
        <img src="./images/campuslands.jpg">
        <div class="ver-datos-container">
            <p>Ver datos</p>
        </div>`
        cardContainer.appendChild(cartaCreada)
    });
})

btnInicio.addEventListener("click",(e)=>{
    sectionInicio.style.display="block"
    cafeteria.style.display="none"
    sectionServicios.style.display="none";
})

//script funcionalidad de carrito y tienda


btnCafeteria.addEventListener("click",(e)=>{
    sectionInicio.style.display="none"
    cafeteria.style.display="block"
    sectionServicios.style.display="none";
    logoCarrito.style.display="block";
})

btnSumarCarro.forEach(boton =>{
boton.addEventListener("click",(e)=>{
            carrito.unshift(boton.id)
            console.log(carrito)
        });
})

// script accordion
