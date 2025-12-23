// script.js

const themeSelect = document.getElementById('theme-select');
const body = document.querySelector('body');
const localStorageKey = 'userTheme';

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// 1. Carregar o tema salvo quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem(localStorageKey) || 'light'; // Padrão 'light'
    applyTheme(savedTheme);
    themeSelect.value = savedTheme; // Sincroniza o select com o tema carregado
});

// 2. Ouvir a mudança no select
themeSelect.addEventListener('change', (event) => {
    const selectedTheme = event.target.value;
    applyTheme(selectedTheme);
    // Salvar a preferência no localStorage
    localStorage.setItem(localStorageKey, selectedTheme);
});
