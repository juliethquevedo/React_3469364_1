CREATE DATABASE inventario_react;
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

USE inventario_react;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol VARCHAR(50),
    estado TINYINT(1) NOT NULL DEFAULT 1,
     creado_en TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO usuarios (id, nombre, email, password, rol, estado, creado_en) VALUES
(1, 'Administrador', 'admin@inventario.com', '$2b$10$2PAK3.8y/Y.m.dlHm3NDRuoM1Jj3JDK.2PCbJ9qMrcywFyQmzVZSe',
'admin', 1, '2026-10-28 16:40:30');