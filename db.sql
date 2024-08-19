-- Создаем базу данных
CREATE DATABASE IF NOT EXISTS wedding;

-- Переходим к созданной базе данных
USE wedding;

-- Создаем таблицу guests
CREATE TABLE guests (
	id INT AUTO_INCREMENT PRIMARY KEY,         -- Уникальный идентификатор для каждого гостя
	full_name VARCHAR(255) NOT NULL,           -- Полное имя гостя
	attending ENUM('будет', 'не будет') NOT NULL, -- Информация, будет ли гость присутствовать
	invitation_text TEXT,                      -- Текст приглашения для гостя
	plus_one ENUM('плюс один', 'без дополнительных гостей') NOT NULL, -- Есть ли плюс один
	family ENUM('семьёй', 'не семьёй') NOT NULL -- Будет ли гость с семьёй
);

-- Создаем таблицу users
CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,         -- Уникальный идентификатор пользователя
	status ENUM('admin', 'user') NOT NULL,     -- Статус пользователя (админ или обычный пользователь)
	login VARCHAR(50) NOT NULL UNIQUE,         -- Логин пользователя (должен быть уникальным)
	password VARCHAR(255) NOT NULL             -- Пароль пользователя
);

-- Дополнительно можно создать индексы или внешние ключи, если нужно
