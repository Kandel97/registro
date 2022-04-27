export interface JwtResponseI {
    dataUser:{
        id:number,
        nombre:string,
        apellido:string,
        genero: string,
        correo: string,
        nombreUsuario: string,
        password: string,
        accessToken: string,
        expiresIn: string
    }

}
