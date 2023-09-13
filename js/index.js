
function copiarTexto() {
    let textoCopiado = document.getElementById("meu-email").textContent;
    const textarea = document.createElement('textarea');
    textarea.value = textoCopiado;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("O texto é: " + textoCopiado);
}
