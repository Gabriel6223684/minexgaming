<?php

namespace app\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

use app\database\builder\InsertQuery;
use app\database\builder\SelectQuery;
use app\database\builder\UpdateQuery;

class Registrar extends Base
{
    public function register(Request $request, Response $response): Response
    {
        $response->getBody()->write;
        return $response;
    }
}
