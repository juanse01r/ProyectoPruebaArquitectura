"use client";

import { MainLayout } from "@/layouts";
import { useParams } from "next/navigation";
import { getCiclista } from "@/services/Ciclistas";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/Button";
import { Ciclista } from "@/types/ciclista"; // Asumiendo que la interfaz se encuentra en el archivo types/ciclista.ts
import Image from 'next/image'; // Importamos Image de next.js para manejar imágenes de manera optimizada

export default function CiclistaDetalle() {
    // Obtenemos los parámetros de la URL usando useParams de Next.js
    const params = useParams();
    const { id_ciclista } = params;
    console.log(id_ciclista); // Imprimimos en consola el id_ciclista para verificar

    // Definimos dos estados locales utilizando useState
    const [isLoading, setIsLoading] = useState<boolean>(true); // Estado para controlar la carga
    const [ciclista, setCiclista] = useState<Ciclista | null>(null); // Estado para almacenar los datos del ciclista

    // Utilizamos useEffect para cargar los datos del ciclista cuando el componente se monta o id_ciclista cambia
    useEffect(() => {
        // Llamamos a la función getCiclista con el id_ciclista obtenido de los parámetros
        getCiclista(id_ciclista).then((res) => {
            // Cuando se recibe la respuesta del servicio, actualizamos el estado ciclista con los datos recibidos
            setCiclista(res.data); // Suponiendo que res.data contiene el objeto del ciclista
            setIsLoading(false); // Marcamos isLoading como false para indicar que la carga ha finalizado
        }).catch((err) => {
            console.log(err); // En caso de error, imprimimos el error en consola
            setIsLoading(false); // También marcamos isLoading como false en caso de error
        });
    }, [id_ciclista]); // Este efecto se ejecuta cada vez que id_ciclista cambia

    // Si isLoading es true, mostramos un mensaje de carga
    if (isLoading) {
        return <div>Cargando...</div>;
    }

    // Una vez que isLoading es false y ciclista tiene datos, renderizamos la información del ciclista
    return (
        <MainLayout>
            {/* Renderizamos el contenido dentro del layout principal */}
            {ciclista && (
                <div className="grid grid-cols-2 gap-10 m-4">
                    {/* Mostramos la información del ciclista */}
                    <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                        {/* Ejemplo de cómo mostrar una imagen */}
                        <Image
                            src={`https://cdn.dummyjson.com/product-images/${ciclista.iddocumento}/1.jpg`}
                            alt={`${ciclista.nombre} ${ciclista.apellido}`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>

                    <div className="flex flex-col items-start justify-center text-white tracking-[1px]">
                        <h1 className="text-[30px] font-bold">{ciclista.nombre} {ciclista.apellido}</h1>
                        <h1>ID: {ciclista.iddocumento}</h1>
                        <h1>País: {ciclista.idpais}</h1> {/* Ejemplo, ajustar según tus atributos */}
                        {/* Mostrar más atributos según necesites */}
                        <h1 className="text-[25px] font-bold">Peso: {ciclista.peso}</h1>
                        <h1>Potencia: {ciclista.potencia}</h1>
                        {/* Ajustar más atributos según tu interfaz */}
                        <Button
                            className="text-white bg-custom-green rounded-md px-4 py-0.1 mt-5"
                            href={`/ciclistas/${id_ciclista}/editar`}
                        >
                            Editar Ciclista
                        </Button>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
