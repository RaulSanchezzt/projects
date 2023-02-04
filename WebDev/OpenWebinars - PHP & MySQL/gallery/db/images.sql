-- Crear tabla de imágenes
CREATE TABLE `gallery`.`images` (
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

-- Insertar imágenes
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("1", "Arch", "archlinux.png", "184887", "I use linux BTW", "1");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("1", "Buildings", "buildings.jpeg", "226452", "New York City", "1");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("1", "Coffee", "coffee.png", "1825628", "Coffe Shop", "1");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("1", "Container", "container.png", "511875", "Container Sheep", "1");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("1", "CPU", "cpu.jpeg", "630994", "CPU City", "0");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("2", "Debian Linux", "debian.png", "53015", "Debian Users Be Like...", "1");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("2", "Elementary OS", "elementaryos.png", "12472", "Who?", "0");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("2", "Fedora", "fedora.png", "21841", "...mmm Red Hat?", "1");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("2", "GNU", "gnu.png", "107243", "GNU Linux :D", "1");
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("2", "Ubuntu", "ubuntu.png", "69757", "Ubuntu <3", "1");