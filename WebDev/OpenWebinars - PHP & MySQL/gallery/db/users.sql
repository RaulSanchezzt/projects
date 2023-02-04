-- Crear tabla de usuarios
CREATE TABLE `gallery`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) NOT NULL,
    `mail` VARCHAR(100) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = MyISAM;

-- Insertar usuarios
INSERT INTO `users` (`id`, `name`, `mail`, `password`, `created`) VALUES ("1", 'admin', 'admin@admin.com', sha1('admin'), CURRENT_TIMESTAMP);
INSERT INTO `users` (`id`, `name`, `mail`, `password`, `created`) VALUES ("2", 'raul', 'raul@raul.com', sha1('raul'), CURRENT_TIMESTAMP);