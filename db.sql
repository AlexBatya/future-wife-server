-- Создаем базу данных, если она еще не существует
CREATE DATABASE IF NOT EXISTS wedding;

-- Переходим к созданной базе данных
USE wedding;

-- Создаем таблицу guests
CREATE TABLE guests (
		id INT AUTO_INCREMENT PRIMARY KEY,
		id_guest INT,
		full_name VARCHAR(255) NOT NULL,
		attending BOOLEAN,
		invitation_text TEXT,
		plus_one BOOLEAN,
		family BOOLEAN
);

-- Создаем таблицу users
CREATE TABLE users (
		id INT AUTO_INCREMENT PRIMARY KEY,
		status ENUM('admin', 'user') NOT NULL,
		login VARCHAR(50) NOT NULL UNIQUE,
		password VARCHAR(255) NOT NULL
);

-- Создаем таблицу family
CREATE TABLE family (
		id INT AUTO_INCREMENT PRIMARY KEY,
		family_name VARCHAR(255) NOT NULL,
		text VARCHAR(255),
		presence BOOLEAN
);

