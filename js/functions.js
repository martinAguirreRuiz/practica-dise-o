import { getProducts } from "./get.js";
import { addProduct } from "./post.js";
import {deleteProduct} from "./delete.js";

// CARGAR TODOS LOS ELEMENTOS DEL API REST
window.onload = getProducts;

// AGREGAR PRODUCTOS
document.getElementById("product_form").addEventListener("submit", function(e){
    
    e.preventDefault();

    const productName = document.querySelector(".form_name").value;
    const productPrice = document.querySelector(".form_price").value;
    const productImg = document.querySelector(".form_img").value;

    if (!productName) {
        document.querySelector(".name_warning").style.display = "inline";
        this.removeEventListener("submit");
    }else{
        document.querySelector(".name_warning").style.display = "none";
    }
    if (!productPrice) {
        document.querySelector(".price_warning").style.display = "inline";
        this.removeEventListener("submit");
    }else{
        document.querySelector(".price_warning").style.display = "none";
    }
    if (!productImg) {
        document.querySelector(".img_warning").style.display = "inline";
        this.removeEventListener("submit");
    }else{
        document.querySelector(".img_warning").style.display = "none";
    }

    const product = {
        name : productName,
        price : productPrice,
        img : productImg
    }

    addProduct(product);

})

// LIMPIAR FORM
document.querySelector(".btn_clear").addEventListener("click", function(e){
    e.preventDefault();

    const inputElements = document.querySelectorAll(".form_input");

    inputElements.forEach(input => {
        input.value = "";
    });

    const warnings = document.querySelectorAll(".form_warning");

    warnings.forEach(warning => {
        warning.style.display = "none";
    });
})

// ELIMINAR PRODUCTOS
document.addEventListener("DOMContentLoaded", function() {
    // Agregar event listener al contenedor padre
    document.querySelector(".grid_container").addEventListener("click", function(event) {
        // Verificar si el clic proviene de un elemento con la clase .fa-trash-can
        if (event.target.classList.contains("fa-trash-can")) {
            // Obtener el ID del producto asociado al botón de eliminación
            const productId = event.target.nextElementSibling.textContent;
            deleteProduct(productId);
        }
    });
});



