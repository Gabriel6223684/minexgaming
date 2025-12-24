<?php

use app\controller\Home;
use app\controller\Login;
use app\middleware\Middleware;
use Slim\Routing\RouteCollectorProxy;
use app\controller\Registrar;
use app\controller\Explore;

$app->get('/', Home::class . ':home')->add(Middleware::authentication());
$app->get('/home', Home::class . ':home')->add(Middleware::authentication());

$app->get('/explore', Explore::class . ':explore');

$app->group('/home', function (RouteCollectorProxy $group) {
    $group->post('', Home::class . ':home');
    $group->get('/alterar/{id}', Home::class . ':alterar');
    $group->post('/update', Home::class . ':update');
})->add(Middleware::authentication());


$app->group('/login', function (RouteCollectorProxy $group) {
    $group->get('', Login::class . ':login');
    $group->post('/auth', Login::class . ':auth');
});

$app->get('/register', Registrar::class . ':register');
