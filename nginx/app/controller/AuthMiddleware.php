<?php

namespace app\controller;

class auth extends Base
{
    public function __invoke($request, $handler)
    {
        $uri = $request->getUri()->getPath();

        // 🔓 liberar arquivos estáticos
        if (
            str_starts_with($uri, '/js/') ||
            str_starts_with($uri, '/css/') ||
            str_starts_with($uri, '/images/')
        ) {
            return $handler->handle($request);
        }

        // 🔓 liberar rotas públicas
        if (in_array($uri, ['/login', '/register'])) {
            return $handler->handle($request);
        }

        // 🔒 proteger o resto
        if (!isset($_SESSION['usuario'])) {
            $response = new \Slim\Psr7\Response();
            return $response->withStatus(401);
        }

        return $handler->handle($request);
    }
}
