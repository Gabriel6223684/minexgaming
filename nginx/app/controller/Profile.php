<?php

namespace app\controller;

class Profile
{
    private $profile;
    private $profile_login;
    public function requisicao()
    {
        // Define o tipo de conteúdo da resposta como JSON
        header('Content-Type: application/json');

        $response = [];

        // 1. Verifica se a requisição é POST e se os dados existem
        if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['nome']) && isset($_POST['email'])) {

            $nome = htmlspecialchars(trim($_POST['nome']));
            $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

            // 2. Validação dos dados (server-side)
            if (empty($nome)) {
                $response['success'] = false;
                $response['message'] = 'O campo nome é obrigatório.';
            } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $response['success'] = false;
                $response['message'] = 'E-mail inválido.';
            } else {
                // 3. Se tudo estiver válido, processa os dados (ex: salvar no banco de dados)
                // ... (código para salvar no MySQL, etc.) ...

                $response['success'] = true;
                $response['message'] = 'Dados recebidos e validados com sucesso, ' . $nome . '!';
            }
        } else {
            // Caso a requisição não seja POST ou os dados estejam faltando
            $response['success'] = false;
            $response['message'] = 'Requisição inválida.';
        }

        // 4. Retorna a resposta JSON para o JavaScript
        echo json_encode($response);
    }
}
