### An MVC application written in plain PHP without libraries or frameworks

This is a personal project created by Craig M Roberts to learn the fundamentals of programming and modern web development from scratch. The main goals of the project are to learn MVC (Model View Controller) architecture, the OOP (Object-Oriented Programming) paradigm, routing, authentication, security, modern development practices, and how to tie it all together to make a functional web app.

This project runs on PHP 7.2 and MySQL. It uses Composer to autoload classes and configuration and utility files. Node.js is used to compile Sass to CSS via npm scripts.

Please feel free to fork, use, comment, critique, suggest, improve or help in any way.

## Installation

View the [live test](https://php-user-authentication.craigmroberts.com/) or install a local copy with the instructions below.

### Install Apache, MySQL, and PHP

It is assumed you know how to install a LAMP stack. For macOS and Windows local development, I would recommend downloading [MAMP](https://www.mamp.info/en/) for a sandboxed environment.

If using MAMP, add MAMP to the PHP command line by adding this line to `.bash_profile`.

```bash
export PATH=/Applications/MAMP/bin/php/php7.2.1/bin:$PATH
```

### Install Composer

[Composer](https://getcomposer.org/) is the standard in PHP for dependency management, class autoloading, and much more.

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### Run install script

- Run `php bin/install.php` in the root directory to initialize the database.
- Run `composer install` to autoload classes and configuration.
- Run `npm install` to allow use of Sass
- In order to run Sass, use `npm run sass`.

The project is all set up and ready to use!

## Project Structure

The entire program flows through `/public/index.php`, and the rest of the project is a directory above public.

```bash

  .git             # Git source directory

  bin/             # Command line scripts
      install.php  # Database installation script
  config/          # Database credentials, utility helpers, and other configuration
  data/            # SQL database files
  node_modules/    # Node.js front end dependencies
  public/          # Publicly accessible files
      assets/css/  # Compiled, ready-to-use styles
      assets/js/   # Compiled, ready-to-use scripts
      assets/images/   # Optimised images
      index.php    # Main entry point for the entire application
  src/             # PHP source code and RAW assets files
      assets/      # Uncompiled raw SCSS, JavaScript
      controllers/ # Controller classes
      models/      # Model classes
      views/       # Views
  vendor/          # Composer files and 3rd party packages
  .gitignore       # Files to be ignored in the repository
  composer.json    # Composer dependency file
  package.json     # npm dependency file
  README.md        # Brief documentation
```

## License

The code is open source and available under the [MIT License](LICENSE).

Written and maintained by [Craig M Roberts](https://www.craigmroberts.com).
