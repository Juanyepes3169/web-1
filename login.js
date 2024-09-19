
let btn1 = document.getElementById('btn1');
let conteo =0;

let datos ={
    correo : 'kamilo@gmail.com',
    pass : '123'
};


function inicio(e){

e.preventDefault();

let corr = document.getElementById('correo').value;
let clave = document.getElementById('contrasena').value;


if(corr !== datos.correo && clave !== datos.pass){

alert('ERROR DE CREDENCIALES, INTENTELO DE NUEVO');
conteo++;

if(conteo > 3){
    alert('EXCESO DE INTENTOS, LA CUENTA FUE BLOQUEADA');
    window.close();
}

}else{

alert('BIENVENIDO A RESERVAS SANTANA');
window.open('https://www.youtube.com/?app=desktop&hl=es');
}

}

btn1.addEventListener('click', inicio);