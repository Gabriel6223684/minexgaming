<?php

namespace app\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use app\controller\profile;

class Home extends Base
{
    public function home($request, $response)
    {
        $dadosTemplate = [
            'titulo' => 'Página inicial'
        ];
        return $this->getTwig()
            ->render($response, 'home.html', $dadosTemplate)
            ->withHeader('Content-Type', 'text/html')
            ->withStatus(200);
    }
}
