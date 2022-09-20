# Code Style + Quality

Our PHP code style is mainly checked by several tools.

First you need install a tool to separate the CS tools from the main application:

```bash
composer require --dev bamarni/composer-bin-plugin
```

:::info
This is really important, as we don't want to influence our main applications dependencies just by installing CS tools.
Especially as they regularly use the same libraries and might conflict.
::: 


## PHPStan

Static code analysis for PHP.

### Installation

```bash
composer bin test require 21torr/php-cs
```

### Usage

```bash
# for libs
/vendor/bin/phpstan analyze -c vendor-bin/test/vendor/21torr/php-cs/phpstan/lib.neon . --ansi

# alternatively for apps
/vendor/bin/phpstan analyze -c vendor-bin/test/vendor/21torr/php-cs/phpstan/symfony.neon . --ansi 
```


## PHP CS Fixer

PHP CS Fixer is a mostly automatic way, to get the code style to match our expectations with as little manual work as possible.  

### Installation

```bash
composer bin cs-fixer require 21torr/php-cs-fixer
```

### Usage

```bash
./vendor/bin/php-cs-fixer fix --diff --config vendor-bin/cs-fixer/vendor/21torr/php-cs-fixer/.php-cs-fixer.dist.php --dry-run --no-interaction --ansi
```
