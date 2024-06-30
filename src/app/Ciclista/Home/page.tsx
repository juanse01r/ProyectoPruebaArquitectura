// pages/CiclistaDetalle.tsx
import { MainLayout } from "@/layouts";
import { useParams } from "next/navigation";
import { getCiclista } from "@/services/Ciclistas";
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/Button";
import { Ciclista } from "@/types/ciclista";
import Image from 'next/image';

export default function CiclistaDetalle() {
    const params = useParams();
    const { iddocumento } = params;

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [ciclista, setCiclista] = useState<Ciclista | null>(null);

    useEffect(() => {
        getCiclista(iddocumento)
            .then((res) => {
                setCiclista(res);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setIsLoading(false);
            });
    }, [iddocumento]);

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    return (
        <MainLayout>
            {ciclista && (
                <div className="grid grid-cols-2 gap-10 m-4">
                    <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                        <Image
                            src={`https://cdn.dummyjson.com/product-images/${ciclista.iddocumento}/1.jpg`}
                            alt={`${ciclista.nombreusuario} ${ciclista.apellidousuario}`}
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center text-white tracking-[1px]">
                        <h1 className="text-[30px] font-bold">{ciclista.nombreusuario} {ciclista.apellidousuario}</h1>
                        <h1>ID: {ciclista.iddocumento}</h1>
                        <h1>País: {ciclista.idpais}</h1>
                        <h1 className="text-[25px] font-bold">Peso: {ciclista.pesousuario}</h1>
                        <h1>Potencia: {ciclista.potenciausuario}</h1>
                        <Button
                            className="text-white bg-custom-green rounded-md px-4 py-0.1 mt-5"
                            href={`/ciclistas/${iddocumento}/editar`}
                        >
                            Editar Ciclista
                        </Button>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}