export interface ClienteModel {
    id: number;
    cedula: string;
    nombres: string;
    apellidos: string;
    direccion: string;
    telefono: string;
    email: string;
    codigociudad?: number;
    codigoestado?: number;
}
