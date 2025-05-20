drop DATABASE if EXISTS assine;

CREATE DATABASE assine
    DEFAULT CHARACTER SET = 'utf8mb4';

CREATE USER 'assine'@'localhost' IDENTIFIED BY 'assine';

GRANT ALL PRIVILEGES ON assine.* TO 'assine'@'localhost';
