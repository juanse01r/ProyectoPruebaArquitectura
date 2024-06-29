import {
  ArchiveBoxIcon,
  DocumentTextIcon,
  HomeIcon,
  LightBulbIcon
} from "@heroicons/react/24/outline";

export const sideBarData = [
  {
    title: <span className="text-white">Home Ciclista</span>,
    path: "/",
    icon: <HomeIcon className="text-white" />,

  },
  {
    title: <span className="text-white">Historial Escuadra</span>,
    path: "/products/general",
    icon: <ArchiveBoxIcon className="text-white" />,
  },
  {
    title: <span className="text-white">Crear Producto</span>,
    path: "/products/create",
    icon: <LightBulbIcon className="text-white" />,
  }
];
