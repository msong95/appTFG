export class Usuario {
    username:string;
    email: string;
    password: string;
    constructor(email: string, password: string, username:string) {
        this.email = email;
        this.password = password;
        this.username=username;
    }
}

export interface usuario{
    username:string;
    email: string;
    password: string;
}