
export async function deleteProduct(idProduct){
    try {
        
        const response = await fetch(`http://localhost:3000/productos/${idProduct}`, {
            method : "DELETE"
        });

        if (!response.ok) {
            throw new Error("Error al eliminar el producto");
        }

    } catch (error) {
        console.error("No se pudo eliminar el producto");
        throw error;
    }
}