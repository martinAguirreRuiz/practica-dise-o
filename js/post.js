
export async function addProduct(product){
    try {
        const response = await fetch("https://practica-disenio.vercel.app/db.json", {
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

