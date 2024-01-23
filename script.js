let mensaje = document.querySelector(".caja-texto")
let botonEncriptar = document.querySelector(".btn-encriptar")
let botonDesencriptar = document.querySelector(".btn-desencriptar")
let mostrarMensaje = document.querySelector(".texto-resultado")
let textoAntesDelCifrado = document.querySelector(".contenedor-parrafo")
let textEncriptado = document.querySelector(".text-encriptado")
let textDesencriptado = document.querySelector(".text-desencriptado")
let contenedorCopiar = document.querySelector(".contenedor-copiar")
let btnCopiar = document.querySelector(".btn-copiar")
let btnClear = document.querySelector(".btn-clear")
let ingresar = document.querySelector(".ingresar")

let mensajeOriginal = "";
let mensajeEncriptado = ""
botonEncriptar.addEventListener("click", () => {
    
    // mostrarMensaje.textContent = mensaje.value
    let mensajeOriginal = mensaje.value

    if (mensajeOriginal === "") {
        ingresar.style.display = "block"
    } else {

        for (let index = 0; index < mensajeOriginal.length; index++) {
            let letra = mensajeOriginal[index].toLowerCase()
            switch (letra) {
                case "a":
                    mensajeEncriptado += "ea"
                    break;
                case "e":
                    mensajeEncriptado += "ie"
                    break;
                case "i":
                    mensajeEncriptado += "oi"
                    break;
                case "o":
                    mensajeEncriptado += "uo"
                    break;

                case "u":
                    mensajeEncriptado += "au"
                    break;
                default:
                    mensajeEncriptado += letra
                    break;
            }

        }
        mostrarMensaje.textContent = mensajeEncriptado


        mensaje.value = ""
        textoAntesDelCifrado.style.display = "none"
        textEncriptado.style.display = "block"
        contenedorCopiar.style.display = "flex"
        textDesencriptado.style.display = "none"

    }
})

botonDesencriptar.addEventListener("click", () => {

    let mensajeEncriptado = mensaje.value;
    if (mensajeEncriptado=== "") {
        ingresar.style.display = "block"
    } else {


        textoAntesDelCifrado.style.display = "none";
        contenedorCopiar.style.display = "block";
        textEncriptado.style.display = "none";
        textDesencriptado.style.display = "block";

        for (let index = 0; index < mensajeEncriptado.length; index++) {
            let letrasEncriptadas = mensajeEncriptado.substr(index, 2).toLowerCase();

            switch (letrasEncriptadas) {
                case "ea":
                    mensajeOriginal += "a";
                    index++;
                    break;
                case "ie":
                    mensajeOriginal += "e";
                    index++;
                    break;
                case "oi":
                    mensajeOriginal += "i";
                    index++;
                    break;
                case "uo":
                    mensajeOriginal += "o";
                    index++;
                    break;
                case "au":
                    mensajeOriginal += "u";
                    index++;
                    break;
                default:
                    mensajeOriginal += mensajeEncriptado[index];
                    break;
            }
        }

        mostrarMensaje.textContent = mensajeOriginal;
        mensaje.value = "";

    }
});

btnCopiar.addEventListener("click" ,async()=>{
    try {
        if (mensajeEncriptado) {
            
            await navigator.clipboard.writeText(mensajeEncriptado);
        }
        if (mensajeOriginal) {
            await navigator.clipboard.writeText(mensajeOriginal);
        }

        console.log("Texto copiado al portapapeles");
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }
})
btnClear.addEventListener("click" , ()=>{
    mostrarMensaje.textContent = ""
    mostrarMensaje.textContent = "Ingrese el texto nuevamente..."
})
