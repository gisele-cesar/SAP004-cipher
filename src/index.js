import cipher from './cipher.js';


document.getElementById("escolhaCifrar").addEventListener ("click", cifrar)
document.getElementById("escolhaDecifrar").addEventListener ("click", decifrar)

function cifrar() {
    let deslocamento = document.getElementById("deslocamento").value;
    let textoNaoProcessado = document.getElementById("textoNaoProcessado").value;
    let textoResultado = cipher.encode (deslocamento, textoNaoProcessado);
    document.getElementById("textoResultado").innerHTML = textoResultado;
}

function decifrar() {
    let deslocamento = document.getElementById("deslocamento").value;
    let textoNaoProcessado = document.getElementById("textoNaoProcessado").value;
    let textoResultado = cipher.decode (deslocamento, textoNaoProcessado);
    document.getElementById("textoResultado").innerHTML = textoResultado;
}


console.log(cipher);
