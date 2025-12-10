import { $ } from '../static/js/geral.js';
export function testar() {
    console.log('Teste bem-sucedido!');
    const elemento = $('#pesquisar');
    console.log('Elemento selecionado:', elemento);
}

testar();

$('#pesquisar').addEventListener('click', () => {
    alert('Botão de pesquisa clicado!');
});

$ ('#pesquisar').addEventListener('click', () => {
    alert('Botão de pesquisa clicado!');
}); // Teste adicional para garantir que a função $ está funcionando corretamente
$('#pesquisar').addEventListener('click', () => {
    alert('Botão de pesquisa clicado!');
}); // Teste adicional para garantir que a função $ está funcionando corretamente

import ({ $ } from '../static/js/geral.js';
export function testar() {
    console.log('Teste bem-sucedido!');
    const elemento = $('#pesquisar');
    console.log('Elemento selecionado:', elemento);
}

testar();