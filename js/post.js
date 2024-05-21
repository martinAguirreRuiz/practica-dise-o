
export async function addProduct(product){
    try {
        const response = await fetch("http://localhost:3000/productos", {
            method : "POST",
            headers: {"Content-type" : "application/json"},
            body: JSON.stringify(product)
        })

        if (!response.ok) {
            throw new Error("Error al agregar el nuevo producto");
        }

        const newProduct = await response.json();
        console.log(newProduct);

    } catch (error) {
        console.error("Error al agregar producto", error);
        throw error;
    }
}

