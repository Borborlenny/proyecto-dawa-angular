import { Material } from "./Material";

export interface Hogar{
    id?: number;
    nombre_usuario: string
    direccion: string
    telefono: string
    email: string
    fecha_registro: string
    tipos_material: Material[]
}
