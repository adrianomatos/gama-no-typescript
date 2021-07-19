interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return{
        nome: "Adriano",
        email: 'adrianotaua@hotmail.com'
    }
}

function setUser(usuario: Usuario){
    //...
}