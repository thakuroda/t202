{

let user = 'João';
let password = 'aviao123';

let usuario = prompt ("Digite o seu nome de usuário");
let senha = prompt ("Digite a sua senha");


if (user == usuario && password == senha) {
 alert ("Login efetuado com sucesso!");
}
else if(user != usuario  &&  password == senha){
    alert("Usuário incorreto"); 
}
else if(user == usuario  &&  password != senha){
    alert("Senha incorreta");
}
else {
    alert("Usuário e senha incorretos"); 
}
}