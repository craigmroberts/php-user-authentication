<?php

class IndexController extends Controller
{
    public $pageTitle = 'Homepage';

    public function post()
    {
    }

    public function get()
    {
        $this->view('index');
    }
}
