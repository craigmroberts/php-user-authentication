<?php
/*!
 * An MVC application written in plain PHP without libraries or frameworks.
 *
 * PHP Version 7.2
 *
 * @version 1.0
 * @author  Craig M Roberts
 * @license https://github.com/craigmroberts/php-user-authentication/blob/master/LICENSE MIT License
 * @link    https://github.com/craigmroberts/php-user-authentication
 * @issues  https://github.com/craigmroberts/php-user-authentication/issues
 * @since   December 7, 2018
 *
 */
$root = __DIR__ . '/..';

require $root . '/vendor/autoload.php';

Router::load($root . '/src/app/routes.php')->direct(getUri(), getMethod());
