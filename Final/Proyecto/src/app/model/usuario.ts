export interface Usuario {
    nombre: string;
    apellido: string;
    foto: string; // Ruta de la imagen de perfil
    telefono: string;
    contraseña: string; // La contraseña se mantendrá privada
    pais: 'España' | 'Inglaterra' | 'Francia' | 'Alemania' | 'Italia' | 'America' | 'Asia' | 'Oceanía' | 'África';
}
