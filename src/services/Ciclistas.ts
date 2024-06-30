// services/Ciclistas.ts
import axios from "axios";
import { Ciclista } from "@/types/ciclista";

export async function getCiclista(id: string): Promise<Ciclista> {
    try {
        const response = await axios.get(`https://isuci-back.onrender.com/perfil/${id}`);
        return response.data; // Devuelve directamente los datos de la respuesta
    } catch (error) {
        throw new Error(`Error al obtener el ciclista con ID ${id}`);
    }
}

/*POST
  //export async function addProduct(product: Product): Promise<any> {
    const response = await axios({
      method: 'post',
      url: 'https://dummyjson.com/products/add',
      headers: { 'Content-Type': 'application/json' },
      data: product
    });
    return response;
  }

//DELETE
  export async function deleteProduct(id: string): Promise<any> {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  }
  
//PUT
  export async function updateProduct(id: string, product: Product): Promise<any> {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    });
    return response.json();
  }
    */
