CREATE TABLE `GALLERY`.`images` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `name` VARCHAR(200) NOT NULL,
    `file` VARCHAR(200) NOT NULL,
    `size` INT NOT NULL,
    `text` TEXT NOT NULL,
    `enabled` INT NOT NULL,
    `created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = MyISAM;