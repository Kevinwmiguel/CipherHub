const texto = document.getElementById('msg');
let btncry = document.getElementById('cry');
let btndcry = document.getElementById('dcry');
let msgCriptografada = document.getElementById('cmsg');

btncry.addEventListener("click", function()
    {
        let mensagemOriginal = texto.value;  // Use 'value' em vez de 'textContent' para obter o conteúdo da textarea

        let mensagemCriptografada = crypto(mensagemOriginal);

        msgCriptografada.textContent = mensagemCriptografada;
    }
);

btndcry.addEventListener("click", function()
    {
        let mensagemOriginal = texto.value;  // Use 'value' em vez de 'textContent' para obter o conteúdo da textarea

        let mensagemCriptografada = dcrypto(mensagemOriginal);

        msgCriptografada.textContent = mensagemCriptografada;
    }
);