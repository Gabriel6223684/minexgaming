import { Validate } from "./Validate.js";
import { Requests } from "./Requests.js";
import { entrar_logout } from "./entrar_logout.js";
import { registrar } from "./registrar.js";

// Função chamada após um login bem-sucedido
function mostrarPerfilUsuario(nomeUsuario) {
    const statusLogin = document.getElementById('status-login');

    // Cria a estrutura HTML dinamicamente
    statusLogin.innerHTML = `
        <div class="perfil-usuario">
            <i class="fas fa-user-circle icone-perfil"></i>
            <span class="nome-usuario">${nomeUsuario}</span>
        </div>
    `;
    // Opcional: Adicionar um ouvinte de evento para o clique no perfil
    statusLogin.querySelector('.perfil-usuario').addEventListener('click', () => {
        // Lógica para abrir menu de perfil/logout
        console.log("Perfil clicado!");
    });
}

// Exemplo de uso:
// Chame esta função com o nome real do usuário após o login ser validado
// mostrarPerfilUsuario("João Silva");

// Requisição para php
document.getElementById('nome-usuario').addEventListener('submit', function (event) {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();

    // Captura os dados do formulário
    const formData = new FormData(this);
    const mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = ''; // Limpa mensagens anteriores

    // Faz a requisição usando fetch()
    fetch('Profile.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json()) // Espera uma resposta JSON do PHP
        .then(data => {
            // Manipula a resposta do PHP
            if (data.success) {
                mensagemDiv.innerHTML = '<p style="color: green;">' + data.message + '</p>';
                // Você pode resetar o formulário aqui se quiser: event.target.reset();
            } else {
                // Exibe erros de validação do PHP
                mensagemDiv.innerHTML = '<p style="color: red;">' + data.message + '</p>';
            }
        })
        .catch(error => {
            // Captura erros de rede ou outros problemas na requisição
            mensagemDiv.innerHTML = '<p style="color: red;">Ocorreu um erro na requisição.</p>';
            console.error('Erro:', error);
        });
});