-- Создаем базу данных
CREATE DATABASE IF NOT EXISTS wedding;

-- Переходим к созданной базе данных
USE wedding;

-- Создаем таблицу guests
CREATE TABLE guests (
	id INT AUTO_INCREMENT PRIMARY KEY,         -- Уникальный идентификатор для каждого гостя
	id_guest INT,
	full_name VARCHAR(255) NOT NULL,           -- Полное имя гостя
	attending BOOLEAN,                -- Информация, будет ли гость присутствовать (TRUE или FALSE)
	invitation_text TEXT,                      -- Текст приглашения для гостя
	plus_one BOOLEAN,                 -- Есть ли плюс один (TRUE или FALSE)
	family BOOLEAN                    -- Будет ли гость с семьёй (TRUE или FALSE)
);

-- Создаем таблицу users
CREATE TABLE users (
	id INT AUTO_INCREMENT PRIMARY KEY,         -- Уникальный идентификатор пользователя
	status ENUM('admin', 'user') NOT NULL,     -- Статус пользователя (админ или обычный пользователь)
	login VARCHAR(50) NOT NULL UNIQUE,         -- Логин пользователя (должен быть уникальным)
	password VARCHAR(255) NOT NULL             -- Пароль пользователя
);

