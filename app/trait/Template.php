<?php

namespace app\trait;

use Slim\Views\Twig;

trait Template
{
    public function getTwig()
    {
        try {
            if (!defined('DIR_VIEW')) {
                throw new \Exception("Constante DIR_VIEW não definida");
            }

            $twig = Twig::create(DIR_VIEW, [
                'cache' => false // ou caminho de cache
            ]);

            $twig->getEnvironment()->addGlobal('EMPRESA', 'MineXStudios');

            return $twig;
        } catch (\Exception $e) {
            throw new \Exception("Erro no Twig: " . $e->getMessage());
        }
    }

    public function setView($name)
    {
        if (!defined('EXT_VIEW')) {
            throw new \Exception("Constante EXT_VIEW não definida");
        }
        return $name . EXT_VIEW;
    }

    public function SendJson($response, array $data = [], int $statusCode = 200)
    {
        $response->getBody()->write(json_encode($data));
        return $response
            ->withHeader('Content-Type', 'application/json')
            ->withStatus($statusCode);
    }
}
