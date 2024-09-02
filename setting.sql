-- Установим глобальные параметры кодировки и коллации
SET GLOBAL character_set_server = 'utf8mb4';
SET GLOBAL collation_server = 'utf8mb4_unicode_ci';

-- Установим параметры кодировки для текущего сеанса
SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';

-- Устанавливаем дефолтные параметры кодировки для новых соединений
SET GLOBAL character_set_client = 'utf8mb4';
SET GLOBAL character_set_connection = 'utf8mb4';
SET GLOBAL character_set_results = 'utf8mb4';

-- Устанавливаем кодировку и коллацию на уровне базы данных
CREATE DATABASE IF NOT EXISTS test 
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- Используем созданную базу данных
USE test;

-- Устанавливаем кодировку и коллацию для таблиц по умолчанию (для примера)
CREATE TABLE IF NOT EXISTS test_table(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Пример добавления данных с кириллицей
INSERT INTO example_table (name) VALUES ('Пример данных на кириллице');
