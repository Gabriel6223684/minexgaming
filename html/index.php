<?php
require __DIR__ . '/../vendor/autoload.php';

// carregar config
require __DIR__ . '/../app/config/config.php';

use Slim\Factory\AppFactory;

// iniciar sessão cedo (opcional)
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

$app = $AppFactory::create();

// Adicionar middleware de routing e error middleware
$app->addRoutingMiddleware();
$errorMiddleware = $app->addErrorMiddleware(true, true, true);

// incluir rotas
require __DIR__ . '/../app/route/route.php';

$app->run();
