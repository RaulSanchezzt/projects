# USE SAKILLA DB

# BASIC QUERY
SELECT title AS 'film name', rental_rate AS price
from film
where (length BETWEEN 90 AND 120) and (rental_rate <=3 OR replacement_cost < 15)
order by price DESC, title;

# COUNT
SELECT COUNT(customer_id) 'CLIENTS'
FROM customer
WHERE active = 1;

# + GROUP
SELECT COUNT(film_id), rental_rate
FROM FILM
WHERE replacement_cost <= 20
GROUP BY rental_rate
ORDER BY rental_rate DESC;

# + HAVING
SELECT COUNT(film_id), rental_rate
FROM FILM
GROUP BY rental_rate
HAVING COUNT(film_id) >= 325
ORDER BY rental_rate DESC;

# INNER JOIN
SELECT *
FROM customer c JOIN address a
ON c.address_id = a.address_id;

# LEFT JOIN
SELECT *
FROM customer c LEFT JOIN address a
ON c.address_id = a.address_id;

# RIGHT JOIN
SELECT *
FROM customer c RIGHT JOIN address a
ON c.address_id = a.address_id;

# INSERT
INSERT INTO `sakila`.`actor` (`actor_id`, `first_name`, `last_name`, `last_update`) 
VALUES ('203', 'CHIQUITO', 'DE LA CALZADA', '2018-04-04 00:22:23');

INSERT INTO `sakila`.`actor` (`first_name`, `last_name`) 
VALUES ('PEPITO', 'PEREZ');

# UPDATE
UPDATE `sakila`.`actor` 
SET `first_name` = 'PEPE', `last_name` = 'PICAPIEDRA' 
WHERE (`actor_id` = '204');

# DELETE
DELETE FROM `sakila`.`actor` 
WHERE (`actor_id` = '204');