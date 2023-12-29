let boton = document.getElementById("btn-enviar");
let resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    const email = document.getElementById("Correo").value;
    validarUsuario(email);
})

const validarUsuario = (Correo) =>{
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let verificar = expReg.test(Correo);
    if(verificar){
        resultado.innerHTML = "El Correo es Valido";
    }
    else{
        resultado.innerHTML = "El Correo NO es Valido";
    }
}