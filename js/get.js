export async function getProducts(){
    try {
        
        const response = await fetch("https://practica-disenio.vercel.app/db.json");
        const data = await response.json();
        console.log("Datos recibidos:", data); // Línea de depuración
        const productos = data.productos;

        console.log("Productos:", productos); // Línea de depuración

        insertProducts(productos);

    } catch (error) {
        console.error("Error al obtener productos", error);
    }
}

function insertProducts(productos){
    const gridContainer = document.querySelector(".grid_container");
    gridContainer.innerHTML = "";

    productos.forEach(producto => {

        const card = document.createElement("div");
        card.classList.add("grid_card");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("grid_img");
        const img = document.createElement("img");
        img.src = producto.img;
        img.alt = producto.name;
        imgContainer.appendChild(img);

        const name = document.createElement("p");
        name.classList.add("grid_name");
        name.textContent = producto.name;

        const price = document.createElement("p");
        price.classList.add("grid_price");
        price.textContent = "$" + producto.price;

        const trashCan = document.createElement("i");
        trashCan.classList.add("fa-regular", "fa-trash-can");

        const productId = document.createElement("span");
        productId.classList.add("product_id");
        productId.textContent = producto.id;

        card.appendChild(imgContainer);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(trashCan);
        card.appendChild(productId);

        gridContainer.appendChild(card);

    });
}

// window.onload = getProducts;

