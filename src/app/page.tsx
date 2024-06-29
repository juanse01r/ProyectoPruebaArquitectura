"use client";

import { Button } from "@/components/Button";
import { MainLayout } from "@/layouts";
import { Routes } from "@/utils/Routes";
import { useRouter } from 'next/navigation';


export default function Home() {
  const navigate = useRouter();

  return (
    <MainLayout>

<div className="flex flex-col w-full items-center justify-center">
  <h1 className="text-[50px] text-white font-bold">Bienvenido a la tienda online</h1>
  <div className="flex justify-center gap-4 mt-[50px]">
    <div className="flex flex-col items-center mr-[160px]">
      <img src="/CheckList.png" alt="Imagen CheckList" className="w-[350px] h-[350px] object-cover"/>
      <Button
        className="text-white text-[20px] bg-custom-green rounded-md px-4 py-6 mt-5"
        href="/products/general"
      >
        Ver Productos
      </Button>
    </div>
    <div className="flex flex-col items-center">
      <img src="/Hammer.png" alt="Imagen Hammer" className="w-[350px] h-[350px] object-cover"/>
      <Button
        className="text-white text-[20px] bg-custom-green rounded-md px-4 py-6 mt-5"
        href="/products/create"
      >
        Crear Producto
      </Button>
    </div>
  </div>
</div>


    </MainLayout>
  );
}
