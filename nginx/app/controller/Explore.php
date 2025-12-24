<?php

namespace app\controller;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class Explore
{
    public function explore(Request $request, Response $response): Response
    {
        $response->getBody()->write('Explore OK');
        return $response;
    }
}
