<?php

$router->get('', 'IndexController@get');
$router->post('', 'IndexController@post');

$router->get('404', 'ExceptionNotFoundController@get');
