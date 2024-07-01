// src/app/Ciclista/Home/[iddocumento].tsx
'use client';

import { MainLayout } from "@/layouts";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from "@/components/Button";
import Image from 'next/image';
import axios from 'axios'; // Importar axios para hacer la llamada a la API

interface Ciclista {
    iddocumento: string;
    nombreusuario: string;
    apellidousuario: string;
    correousuario: string;
    idpais: string;
    idescuadra: string;
    anosexperiencia?: number | null;
}

export default function CiclistaDetalle() {
    const searchParams = useSearchParams();
    let iddocumento = searchParams.get('iddocumento'); // Obtener el ID del documento de los parámetros de búsqueda

    // Establecer un valor predeterminado si no se proporciona iddocumento en la URL
    const defaultIddocumento = '10022'; // Aquí debes establecer el ID predeterminado que desees

    if (!iddocumento) {
        iddocumento = defaultIddocumento;
    }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ciclista, setCiclista] = useState<Ciclista | null>(null);
    const [error, setError] = useState<string | null>(null); // Definir el tipo explícitamente como string | null

    useEffect(() => {
        // Función asincrónica para obtener datos del ciclista desde la API
        const fetchCiclista = async () => {
            try {
                const response = await axios.get<Ciclista>(`https://isuci-back.onrender.com/perfil/${iddocumento}`);
                setCiclista(response.data);
                setIsLoading(false);
            } catch (error: any) { // Capturar el error de cualquier tipo
                setError(error.message ?? 'Error desconocido'); // Establecer un mensaje de error predeterminado si no hay mensaje
                setIsLoading(false);
            }
        };

        fetchCiclista(); // Llamar a la función para obtener los datos del ciclista
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <MainLayout>
        {ciclista && (
            <div className="grid grid-cols-2 gap-10 m-4">
                <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                    <img
                        src={`https://cdn.pixabay.com/photo/2013/07/13/13/38/man-161282_640.png`}
                        alt={`${ciclista.nombreusuario} ${ciclista.apellidousuario}`}
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                    />
                </div>
                <div className="flex flex-col items-start justify-center text-white tracking-[1px]">
                    <h1 className="text-[30px] font-bold">{ciclista.nombreusuario} {ciclista.apellidousuario}</h1>
                    <h1>ID: {ciclista.iddocumento}</h1>
                    <h1>Correo: {ciclista.correousuario}</h1>
                    <h1>País: {ciclista.idpais}</h1>
                    <h1>Escuadra: {ciclista.idescuadra}</h1>
                    <h1>Años de Experiencia: {ciclista.anosexperiencia ?? 'N/A'}</h1>
                    

                </div>
            </div>
        )}
    </MainLayout>
    );
}
