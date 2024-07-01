'use client';

import { MainLayout } from "@/layouts";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from "@/components/Button";
import Image from 'next/image';
import axios from 'axios'; // Importar axios para hacer la llamada a la API

interface Ciclista {
    idtipousuario: string;
    nombreusuario: string;
    apellidousuario: string;
    iddocumento: string;
    correousuario: string;
    idpais: string;
    idescuadra: string;
    idtipocontextura: string;
    idespecialidad: string;
    generousuario: string;
    pesousuario: string;
    potenciausuario: string;
    acelaracionusuario: string;
    velocidadpromediousuario: string;
    velocidadmaximausuario: string;
    tiempociclista: string;
    anosexperiencia: string;
    gradorampa: string;
}

export default function CiclistaDetalle() {
    const searchParams = useSearchParams();
    let iddocumento = searchParams.get('iddocumento');

    const defaultIddocumento = '10020';

    if (!iddocumento) {
        iddocumento = defaultIddocumento;
    }

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ciclista, setCiclista] = useState<Ciclista | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCiclista = async () => {
            try {
                const response = await axios.get<Ciclista>(`https://isuci-back.onrender.com/perfil/${iddocumento}`);
                setCiclista(response.data);
                setIsLoading(false);
            } catch (error: any) {
                setError(error.message ?? 'Error desconocido');
                setIsLoading(false);
            }
        };

        fetchCiclista();
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
                            src={`data:image/jpeg;base64,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`}
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
                        <h1>Años de Experiencia: {ciclista.anosexperiencia}</h1>
                        <h1>Género: {ciclista.generousuario}</h1>
                        <h1>Peso: {ciclista.pesousuario}</h1>
                        <h1>Potencia: {ciclista.potenciausuario}</h1>
                        <h1>Aceleración: {ciclista.acelaracionusuario}</h1>
                        <h1>Velocidad Promedio: {ciclista.velocidadpromediousuario}</h1>
                        <h1>Velocidad Máxima: {ciclista.velocidadmaximausuario}</h1>
                        <h1>Tiempo Ciclista: {ciclista.tiempociclista}</h1>
                        <h1>Grado de Rampa: {ciclista.gradorampa}</h1>
                        {/* Mostrar más detalles según necesidad */}
                        <Button
                            className="text-white bg-custom-green rounded-md px-4 py-0.1 mt-5"
                            href={`/Ciclista/Home/${iddocumento}/editar`}
                        >
                            Editar Ciclista
                        </Button>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}
