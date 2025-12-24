import { Validate } from "./Validate.js";
import { Requests } from "./Requests.js";
import { entrar_logout } from "./home";
import { entrar_logout } from "./login";

// Seleciona os elementos
const logout = document.getElementById('logout');
const entrar = document.getElementById('entrar');
const logout = document.getElementById('logout');
const header = document.querySelector('header');

// Função para simular login/logout
function entrar() {
    // Esconde o botão de Login
    entrar.classList.add('hidden');
    // Mostra o botão de Sair (ou Logout)
    logout.classList.remove('hidden');
    // Se tiver um botão de logout separado
    logout.classList.remove('hidden');
    // Adiciona uma classe ao body ou header para mudar o layout (opcional)
    document.body.classList.add('logado');
}

function logout() {
    // Esconde o botão de Sair (ou Logout)
    logout.classList.add('hidden');
    logout.classList.add('hidden');
    // Mostra o botão de Login
    entrar.classList.remove('hidden');
    // Remove a classe do body (opcional)
    document.body.classList.remove('logado');
}

// Adiciona os event listeners
entrar.addEventListener('click', entrar);
logout.addEventListener('click', logout);
logout.addEventListener('click', logout);

// Ao carregar a página, verifica se o usuário está logado (ex: token salvo)
window.onload = function () {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        entrar(); // Se já estiver logado, mostra os botões de sair
    } else {
        logout(); // Garante que os botões de sair estejam escondidos
    }
}
