export class elemento {

    id?: number;
    nombre: string;
    obs: String;
    descrip: String;
    tipo: String;
    cod: string
    esta?: boolean;
    caratula: String;
    backup: String;
    imagenesPaths?: string[];

    constructor(

        nombre: string,
        obs: String,
        descrip: String,
        tipo: String,
        caratula: String,
        cod: string,
        backup: String,
        id?: number,
        esta?: boolean,
        imagenesPaths?: string[],
    ) {
        this.nombre = nombre;
        this.descrip = descrip;
        this.obs = obs;
        this.tipo = tipo;
        this.caratula = caratula;
        this.cod = cod
        this.backup = backup;
    }
}