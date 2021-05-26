export class Usuario {
    id:string;
    username:string;
    email: string;
    password: string;
    constructor(id: string,email: string, password: string, username:string) {
        this.id=id;
        this.email = email;
        this.password = password;
        this.username=username;
    }
}
