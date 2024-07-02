"use client";

import { Button } from "@/components/Button";
import { MainLayout } from "@/layouts";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black to-blue-900 text-white">
        <h1 className="text-4xl font-bold mb-8">
          <span className="text-blue-900">Bienvenido </span>
          <span className="text-green-500">al sistema </span>
          <span className="text-red-500">ISUCI</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Cuadro Azul */}
          <div className="border-blue-500 border-4 rounded-lg p-4">
            <img src="https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/30/3815497-77561868-2560-1440.jpg" alt="Ejemplo Azul" className="w-full h-auto rounded-lg" />
          </div>
          
          {/* Cuadro Verde */}
          <div className="border-green-500 border-4 rounded-lg p-4">
            <img src="" alt="Ejemplo Verde" className="w-full h-auto rounded-lg" />
          </div>
          
          {/* Cuadro Rojo */}
          <div className="border-red-500 border-4 rounded-lg p-4">
            <img src="/ejemplo-rojo.jpg" alt="Ejemplo Rojo" className="w-full h-auto rounded-lg" />
          </div>
          
          {/* Cuadro Amarillo */}
          <div className="border-yellow-500 border-4 rounded-lg p-4">
            <img src="/ejemplo-amarillo.jpg" alt="Ejemplo Amarillo" className="w-full h-auto rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-8">
          <p className="text-lg text-center">Aquí puedes encontrar todo sobre el mundo del ciclismo.</p>
          <Button
            className="text-white text-lg bg-green-500 rounded-md px-8 py-4"
            onClick={() => router.push('/Login')}
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}  
