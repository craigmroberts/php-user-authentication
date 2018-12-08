<?php

/**
 * Controller Class
 *
 * The Controller class directs traffic to the proper view, and
 * contains common functions used throughout the routes.
 */

abstract class Controller
{
    protected $pageTitle;

    /**
     * Initialize controller.
     */

    public function __construct()
    {
    }

    public function escape($html) {
        return htmlspecialchars($html, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    }

    /**
     * Shortcut to retrieve JavaScript file from the /js/ directory.
     * Returns a URL.
     */

    protected function getScript($filename)
    {
        $file = strtolower($filename);

        return 'https://' . $_SERVER['HTTP_HOST'] . '/assets/scripts/' . $file . '.js';
    }

    /**
     * Shortcut to retrieve stylesheet file from the /css/ directory.
     * Returns a URL.
     */

    protected function getStylesheet($filename)
    {
        $file = strtolower($filename);

        return 'https://' . $_SERVER['HTTP_HOST'] . '/assets/styles/' . $file . '.css';
    }

    /**
     * Retrieve a view URL by filename.
     * Requires a file.
     */

    protected function view($view)
    {
        $view = strtolower($view);

        require_once $_SERVER['DOCUMENT_ROOT'] . '/src/views/' . $view . '.view.php';
    }

    /**
     * Check if the current page is the Index.
     * Returns a Boolean.
     */

    protected function isIndex()
    {
        $redirect = ltrim($_SERVER['REDIRECT_URL'], '/');

        return $redirect === '';
    }

    /**
     * Check if the current page is specified page.
     * Returns a Boolean.
     */

    protected function isPage($view)
    {
        $view = strtolower($view);

        $redirect = ltrim($_SERVER['REDIRECT_URL'], '/');

        return $redirect === $view;
    }

    /**
     * Redirects to the specified page.
     */

    protected function redirect($view)
    {
        $view = strtolower($view);

        header('Location: /' . $view );
        exit;
    }

}
