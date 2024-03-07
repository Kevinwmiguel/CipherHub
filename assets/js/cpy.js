const botaoCopiar = document.querySelector('.Cpy');

botaoCopiar.addEventListener('click', async function() {
    const textoParaCopiar = document.getElementById('cmsg').textContent;

    try {
        await navigator.clipboard.writeText(textoParaCopiar);
        alert('Texto copiado para a área de transferência!');
    } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
    }
});