-- Создаем базу данных с нужной кодировкой, если она еще не существует
CREATE DATABASE IF NOT EXISTS wedding CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Переходим к созданной базе данных
USE wedding;

-- Создаем таблицу guests с нужной кодировкой
CREATE TABLE guests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_guest INT,
    full_name VARCHAR(255) NOT NULL,
    attending BOOLEAN,
    invitation_text TEXT,
    plus_one BOOLEAN,
    family BOOLEAN
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Создаем таблицу users с нужной кодировкой
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    status ENUM('admin', 'user') NOT NULL,
    login VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Создаем таблицу family с нужной кодировкой
CREATE TABLE family (
    id INT AUTO_INCREMENT PRIMARY KEY,
    family_name VARCHAR(255) NOT NULL,
    text VARCHAR(255),
    presence BOOLEAN
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

