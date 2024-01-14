export class elemento {

    id?: number;
    nombre: String;
    obs: String;
    descrip: String;
    tipo: String;
    esta?: boolean;
    caratula: String;
    imagenesPaths?: string[];

    constructor(

        nombre: String,
        obs: String,
        descrip: String,
        tipo: String,
        caratula: String,
        id?: number,
        esta?: boolean,
        imagenesPaths?: string[],
    ) {
        this.nombre = nombre;
        this.descrip = descrip;
        this.obs = obs;
        this.tipo = tipo;
        this.caratula = caratula;
    }
}