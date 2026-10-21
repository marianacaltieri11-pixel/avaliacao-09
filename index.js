function atualizarContagemRegressiva() {
    const agora = new Date();
    
    const meiaNoite = new Date();
    meiaNoite.setHours(24, 0, 0, 0);

    const diferenca = meiaNoite - agora;

    if (diferenca <= 0) {
        const elementoContador = document.getElementById("contador");
        if (elementoContador) {
            elementoContador.innerText = "As ofertas exclusivas terminam em: 00:00:00";
        }
        return;
    }

    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    const horasFormatadas = String(horas).padStart(2, '0');
    const minutosFormatados = String(minutos).padStart(2, '0');
    const segundosFormatados = String(segundos).padStart(2, '0');

    const elementoContador = document.getElementById("contador");
    if (elementoContador) {
        elementoContador.innerText = `As ofertas exclusivas terminam em: ${horasFormatadas}:${minutosFormatados}:${segundosFormatados}`;
    }
}

atualizarContagemRegressiva();
setInterval(atualizarContagemRegressiva, 1000);