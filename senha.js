const campoSenha = document.getElementById('senha');
const botaoMostrarSenha = document.getElementById('mostrarSenha');

botaoMostrarSenha.addEventListener('click', function() {
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
        botaoMostrarSenha.textContent = "Ocultar Senha";
    } else {
        campoSenha.type = "password";
        botaoMostrarSenha.textContent = "Mostrar Senha";
    }
});