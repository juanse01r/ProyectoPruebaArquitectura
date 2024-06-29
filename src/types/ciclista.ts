export interface Ciclista {
    tipo_usuario: string;
    nombre: string;
    apellido: string;
    iddocumento: string;
    correo: string;
    telefono: string; // Asumiendo que "telefono" es el atributo que sigue a "correo" en tu lista
    direccion: string; // Asumiendo que "direccion" es el siguiente atributo
    idpais: string;
    idescuadra: string;
    idtipocontextura: string;
    idespecialidad: string; // Asumiendo que "idespecialidad" es el siguiente atributo
    genero: string;
    peso: string; // Asumiendo que "peso" es el siguiente atributo
    potencia: string;
    aceleracion: string;
    velocidadpromedio: string; // Asumiendo que "velocidadpromedio" es el siguiente atributo
    velocidadmaxima: string;
    tiempociclista: string;
    anos_experiencia: string; // Asumiendo que "anos experiencia" es el siguiente atributo
    gradorampa: string; // Asumiendo que "gradorampa" es el último atributo
}
