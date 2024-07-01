'use client';

import { MainLayout } from "@/layouts";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from "@/components/Button";
import Image from 'next/image';
import axios from 'axios'; // Importar axios para hacer la llamada a la API

interface Masajista {
    iddocumento: string;
    nombreusuario: string;
    apellidousuario: string;
    correousuario: string;
    idpais: string;
    idescuadra: string | null; // Asegurarse de manejar idescuadra como string o null
    anosexperiencia?: number | null;
}

export default function MasajistaDetalle() {
    const searchParams = useSearchParams();
    let iddocumento = searchParams.get('iddocumento'); // Obtener el ID del documento de los parámetros de búsqueda

    // Establecer un valor predeterminado si no se proporciona iddocumento en la URL
    const defaultIddocumento = '10025'; // ID predeterminado para masajista

    if (!iddocumento) {
        iddocumento = defaultIddocumento;
    }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [masajista, setMasajista] = useState<Masajista | null>(null);
    const [error, setError] = useState<string | null>(null); // Definir el tipo explícitamente como string | null

    useEffect(() => {
        // Función asincrónica para obtener datos del masajista desde la API
        const fetchMasajista = async () => {
            try {
                const response = await axios.get<Masajista>(`https://isuci-back.onrender.com/perfil/${iddocumento}`);
                setMasajista(response.data);
                setIsLoading(false);
            } catch (error: any) { // Capturar el error de cualquier tipo
                setError(error.message ?? 'Error desconocido'); // Establecer un mensaje de error predeterminado si no hay mensaje
                setIsLoading(false);
            }
        };

        fetchMasajista(); // Llamar a la función para obtener los datos del masajista
    }, []);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <MainLayout>
            {masajista && (
                <div className="grid grid-cols-2 gap-10 m-4">
                    <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                        <img
                            src={`https://img.freepik.com/vector-gratis/ilustracion-concepto-terapia-ventosas_114360-23977.jpg?size=626&ext=jpg`}
                            alt={`${masajista.nombreusuario} ${masajista.apellidousuario}`}
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center text-white tracking-[1px]">
                        <h1 className="text-[30px] font-bold">{masajista.nombreusuario} {masajista.apellidousuario}</h1>
                        <h1>ID: {masajista.iddocumento}</h1>
                        <h1>Correo: {masajista.correousuario}</h1>
                        <h1>País: {masajista.idpais}</h1>
                        <h1>Escuadra: {masajista.idescuadra ?? 'N/A'}</h1>
                        <h1>Años de Experiencia: {masajista.anosexperiencia ?? 'N/A'}</h1>
                        {/* Ejemplo de botón para navegar a otra página */}
                        <Button href={`/Masajista/${iddocumento}/OtraPagina`} className="mt-4">
                            Ir a otra página
                        </Button>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
