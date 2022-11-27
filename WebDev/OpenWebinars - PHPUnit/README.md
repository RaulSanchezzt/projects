# OpenWebinars - PHPUnit

1. Install PHPUnit using composer

```bash
❯ composer require --dev phpunit/phpunit ^9
Info from https://repo.packagist.org: #StandWithUkraine
./composer.json has been created
Running composer update phpunit/phpunit
Loading composer repositories with package information
Updating dependencies
Lock file operations: 28 installs, 0 updates, 0 removals
  - Locking doctrine/instantiator (1.4.1)
  - Locking myclabs/deep-copy (1.11.0)
  - Locking nikic/php-parser (v4.15.2)
  - Locking phar-io/manifest (2.0.3)
  - Locking phar-io/version (3.2.1)
  - Locking phpunit/php-code-coverage (9.2.19)
  - Locking phpunit/php-file-iterator (3.0.6)
  - Locking phpunit/php-invoker (3.1.1)
  - Locking phpunit/php-text-template (2.0.4)
  - Locking phpunit/php-timer (5.0.3)
  - Locking phpunit/phpunit (9.5.26)
  - Locking sebastian/cli-parser (1.0.1)
  - Locking sebastian/code-unit (1.0.8)
  - Locking sebastian/code-unit-reverse-lookup (2.0.3)
  - Locking sebastian/comparator (4.0.8)
  - Locking sebastian/complexity (2.0.2)
  - Locking sebastian/diff (4.0.4)
  - Locking sebastian/environment (5.1.4)
  - Locking sebastian/exporter (4.0.5)
  - Locking sebastian/global-state (5.0.5)
  - Locking sebastian/lines-of-code (1.0.3)
  - Locking sebastian/object-enumerator (4.0.4)
  - Locking sebastian/object-reflector (2.0.4)
  - Locking sebastian/recursion-context (4.0.4)
  - Locking sebastian/resource-operations (3.0.3)
  - Locking sebastian/type (3.2.0)
  - Locking sebastian/version (3.0.2)
  - Locking theseer/tokenizer (1.2.1)
Writing lock file
Installing dependencies from lock file (including require-dev)
Package operations: 28 installs, 0 updates, 0 removals
  - Downloading sebastian/version (3.0.2)
  - Downloading sebastian/type (3.2.0)
  - Downloading sebastian/resource-operations (3.0.3)
  - Downloading sebastian/recursion-context (4.0.4)
  - Downloading sebastian/object-reflector (2.0.4)
  - Downloading sebastian/object-enumerator (4.0.4)
  - Downloading sebastian/global-state (5.0.5)
  - Downloading sebastian/exporter (4.0.5)
  - Downloading sebastian/environment (5.1.4)
  - Downloading sebastian/diff (4.0.4)
  - Downloading sebastian/comparator (4.0.8)
  - Downloading sebastian/code-unit (1.0.8)
  - Downloading sebastian/cli-parser (1.0.1)
  - Downloading phpunit/php-timer (5.0.3)
  - Downloading phpunit/php-text-template (2.0.4)
  - Downloading phpunit/php-invoker (3.1.1)
  - Downloading phpunit/php-file-iterator (3.0.6)
  - Downloading theseer/tokenizer (1.2.1)
  - Downloading nikic/php-parser (v4.15.2)
  - Downloading sebastian/lines-of-code (1.0.3)
  - Downloading sebastian/complexity (2.0.2)
  - Downloading sebastian/code-unit-reverse-lookup (2.0.3)
  - Downloading phpunit/php-code-coverage (9.2.19)
  - Downloading phar-io/version (3.2.1)
  - Downloading phar-io/manifest (2.0.3)
  - Downloading myclabs/deep-copy (1.11.0)
  - Downloading doctrine/instantiator (1.4.1)
  - Downloading phpunit/phpunit (9.5.26)
  - Installing sebastian/version (3.0.2): Extracting archive
  - Installing sebastian/type (3.2.0): Extracting archive
  - Installing sebastian/resource-operations (3.0.3): Extracting archive
  - Installing sebastian/recursion-context (4.0.4): Extracting archive
  - Installing sebastian/object-reflector (2.0.4): Extracting archive
  - Installing sebastian/object-enumerator (4.0.4): Extracting archive
  - Installing sebastian/global-state (5.0.5): Extracting archive
  - Installing sebastian/exporter (4.0.5): Extracting archive
  - Installing sebastian/environment (5.1.4): Extracting archive
  - Installing sebastian/diff (4.0.4): Extracting archive
  - Installing sebastian/comparator (4.0.8): Extracting archive
  - Installing sebastian/code-unit (1.0.8): Extracting archive
  - Installing sebastian/cli-parser (1.0.1): Extracting archive
  - Installing phpunit/php-timer (5.0.3): Extracting archive
  - Installing phpunit/php-text-template (2.0.4): Extracting archive
  - Installing phpunit/php-invoker (3.1.1): Extracting archive
  - Installing phpunit/php-file-iterator (3.0.6): Extracting archive
  - Installing theseer/tokenizer (1.2.1): Extracting archive
  - Installing nikic/php-parser (v4.15.2): Extracting archive
  - Installing sebastian/lines-of-code (1.0.3): Extracting archive
  - Installing sebastian/complexity (2.0.2): Extracting archive
  - Installing sebastian/code-unit-reverse-lookup (2.0.3): Extracting archive
  - Installing phpunit/php-code-coverage (9.2.19): Extracting archive
  - Installing phar-io/version (3.2.1): Extracting archive
  - Installing phar-io/manifest (2.0.3): Extracting archive
  - Installing myclabs/deep-copy (1.11.0): Extracting archive
  - Installing doctrine/instantiator (1.4.1): Extracting archive
  - Installing phpunit/phpunit (9.5.26): Extracting archive
5 package suggestions were added by new dependencies, use `composer suggest` to see details.
Generating autoload files
25 packages you are using are looking for funding.
Use the `composer fund` command to find out more!
```