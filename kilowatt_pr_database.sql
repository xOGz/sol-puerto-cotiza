
-- Kilowatt PR Database Setup for Hostinger
-- This file creates all necessary tables for the solar installation website

-- Create database (uncomment if you need to create the database)
-- CREATE DATABASE kilowatt_pr CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE kilowatt_pr;

-- Table for lead capture form submissions
CREATE TABLE IF NOT EXISTS leads (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    municipio VARCHAR(100) NOT NULL,
    consumo VARCHAR(50) NOT NULL,
    email VARCHAR(255) DEFAULT NULL,
    mensaje TEXT DEFAULT NULL,
    estado ENUM('nuevo', 'contactado', 'cotizado', 'convertido', 'perdido') DEFAULT 'nuevo',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    INDEX idx_estado (estado),
    INDEX idx_fecha_creacion (fecha_creacion),
    INDEX idx_municipio (municipio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table for contact form submissions
CREATE TABLE IF NOT EXISTS contactos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    telefono VARCHAR(20) DEFAULT NULL,
    asunto VARCHAR(255) DEFAULT NULL,
    mensaje TEXT NOT NULL,
    estado ENUM('nuevo', 'respondido', 'cerrado') DEFAULT 'nuevo',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    ip_address VARCHAR(45) DEFAULT NULL,
    INDEX idx_estado (estado),
    INDEX idx_fecha_creacion (fecha_creacion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table for blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    contenido LONGTEXT NOT NULL,
    extracto TEXT DEFAULT NULL,
    imagen_destacada VARCHAR(500) DEFAULT NULL,
    meta_title VARCHAR(255) DEFAULT NULL,
    meta_description VARCHAR(500) DEFAULT NULL,
    keywords TEXT DEFAULT NULL,
    estado ENUM('borrador', 'publicado', 'archivado') DEFAULT 'borrador',
    fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    vistas INT DEFAULT 0,
    INDEX idx_slug (slug),
    INDEX idx_estado (estado),
    INDEX idx_fecha_publicacion (fecha_publicacion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table for testimonials
CREATE TABLE IF NOT EXISTS testimonios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    municipio VARCHAR(100) NOT NULL,
    foto VARCHAR(500) DEFAULT NULL,
    testimonio TEXT NOT NULL,
    ahorro_mensual DECIMAL(10,2) DEFAULT NULL,
    calificacion INT DEFAULT 5 CHECK (calificacion >= 1 AND calificacion <= 5),
    activo BOOLEAN DEFAULT TRUE,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    orden_display INT DEFAULT 0,
    INDEX idx_activo (activo),
    INDEX idx_orden_display (orden_display)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table for newsletter subscriptions
CREATE TABLE IF NOT EXISTS newsletter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nombre VARCHAR(255) DEFAULT NULL,
    activo BOOLEAN DEFAULT TRUE,
    fecha_suscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_confirmacion TIMESTAMP NULL DEFAULT NULL,
    token_confirmacion VARCHAR(255) DEFAULT NULL,
    INDEX idx_email (email),
    INDEX idx_activo (activo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table for tracking website analytics
CREATE TABLE IF NOT EXISTS analytics (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pagina VARCHAR(255) NOT NULL,
    ip_address VARCHAR(45) DEFAULT NULL,
    user_agent TEXT DEFAULT NULL,
    referrer VARCHAR(500) DEFAULT NULL,
    utm_source VARCHAR(100) DEFAULT NULL,
    utm_medium VARCHAR(100) DEFAULT NULL,
    utm_campaign VARCHAR(100) DEFAULT NULL,
    fecha_visita TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tiempo_sesion INT DEFAULT NULL,
    INDEX idx_pagina (pagina),
    INDEX idx_fecha_visita (fecha_visita),
    INDEX idx_utm_source (utm_source)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample blog posts
INSERT INTO blog_posts (titulo, slug, contenido, extracto, meta_title, meta_description, keywords, estado, fecha_publicacion) VALUES
('¿Cuánto cuestan las placas solares en Puerto Rico?', 'cuanto-cuestan-placas-solares-puerto-rico', 
'<h2>Costo de placas solares en Puerto Rico 2025</h2><p>El costo de instalar placas solares en Puerto Rico varía según el tamaño del sistema y las necesidades energéticas de tu hogar...</p>', 
'Descubre el costo real de instalar placas solares en Puerto Rico y cuánto puedes ahorrar en tu factura eléctrica.',
'¿Cuánto cuestan las placas solares en Puerto Rico? - Precios 2025',
'Conoce los precios actuales de placas solares en Puerto Rico, factores que afectan el costo y opciones de financiamiento disponibles.',
'placas solares precio puerto rico, costo energia solar, instalacion solar puerto rico',
'publicado', NOW()),

('Placas solares con batería vs sin batería', 'placas-solares-con-bateria-vs-sin-bateria',
'<h2>Sistema solar con batería vs sistema conectado a la red</h2><p>Una de las decisiones más importantes al instalar placas solares es elegir entre un sistema con batería o sin batería...</p>',
'Comparación completa entre sistemas solares con batería y sin batería para ayudarte a tomar la mejor decisión.',
'Placas solares con batería vs sin batería - ¿Cuál elegir?',
'Descubre las diferencias entre sistemas solares con y sin batería, ventajas, desventajas y cuál es mejor para tu hogar.',
'sistema solar bateria, placas solares sin bateria, energia solar puerto rico',
'publicado', NOW()),

('Incentivos solares en Puerto Rico 2025', 'incentivos-solares-puerto-rico-2025',
'<h2>Incentivos y créditos fiscales para energía solar en Puerto Rico</h2><p>Puerto Rico ofrece varios incentivos para promover la adopción de energía solar...</p>',
'Guía completa de todos los incentivos, créditos fiscales y programas disponibles para energía solar en Puerto Rico.',
'Incentivos solares en Puerto Rico 2025 - Créditos y beneficios',
'Conoce todos los incentivos gubernamentales, créditos fiscales y programas de financiamiento para placas solares en Puerto Rico.',
'incentivos energia solar puerto rico, credito fiscal solar, programas gobierno solar',
'publicado', NOW()),

('Cómo ahorrar hasta 90% en tu factura con placas solares', 'como-ahorrar-90-porciento-factura-placas-solares',
'<h2>Maximiza tu ahorro con energía solar</h2><p>Con la instalación correcta de placas solares, es posible reducir hasta un 90% de tu factura eléctrica...</p>',
'Estrategias probadas para maximizar el ahorro en tu factura eléctrica con la instalación de placas solares.',
'Cómo ahorrar hasta 90% en tu factura eléctrica con placas solares',
'Descubre cómo reducir drásticamente tu factura de luz con placas solares y las mejores estrategias de ahorro energético.',
'ahorrar factura luz, placas solares ahorro, energia solar puerto rico',
'publicado', NOW());

-- Insert sample testimonials
INSERT INTO testimonios (nombre, municipio, testimonio, ahorro_mensual, calificacion, activo, orden_display) VALUES
('María González', 'San Juan', 'Desde que instalé las placas solares con Kilowatt PR, mi factura se redujo de $300 a $50 mensuales. ¡Increíble!', 250.00, 5, TRUE, 1),
('Carlos Rivera', 'Bayamón', 'El proceso fue súper fácil y profesional. En 6 meses ya recuperé gran parte de mi inversión.', 180.00, 5, TRUE, 2),
('Ana Martínez', 'Carolina', 'Excelente servicio desde la cotización hasta la instalación. Mi familia está muy satisfecha.', 220.00, 5, TRUE, 3),
('Roberto Pérez', 'Ponce', 'La mejor decisión que he tomado. Ahorro más de $200 cada mes y ayudo al medio ambiente.', 215.00, 5, TRUE, 4),
('Carmen López', 'Caguas', 'Kilowatt PR cumplió todas sus promesas. Instalación rápida y ahorro inmediato.', 190.00, 5, TRUE, 5);

-- Create user for website connection (adjust credentials as needed)
-- Note: You'll need to create this user in your Hostinger control panel
-- This is just for reference:
-- CREATE USER 'kilowatt_user'@'localhost' IDENTIFIED BY 'secure_password_here';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON kilowatt_pr.* TO 'kilowatt_user'@'localhost';
-- FLUSH PRIVILEGES;

-- Indexes for better performance
CREATE INDEX idx_leads_telefono ON leads(telefono);
CREATE INDEX idx_contactos_email ON contactos(email);
CREATE INDEX idx_blog_posts_titulo ON blog_posts(titulo);

-- Views for common queries
CREATE VIEW leads_activos AS
SELECT * FROM leads 
WHERE estado IN ('nuevo', 'contactado', 'cotizado')
ORDER BY fecha_creacion DESC;

CREATE VIEW blog_posts_publicados AS
SELECT id, titulo, slug, extracto, imagen_destacada, fecha_publicacion, vistas
FROM blog_posts 
WHERE estado = 'publicado'
ORDER BY fecha_publicacion DESC;

-- Sample configuration table for website settings
CREATE TABLE IF NOT EXISTS configuraciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clave VARCHAR(100) UNIQUE NOT NULL,
    valor TEXT,
    descripcion VARCHAR(255),
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO configuraciones (clave, valor, descripcion) VALUES
('empresa_telefono', '(787) 555-0123', 'Teléfono principal de la empresa'),
('empresa_email', 'info@kilowattpr.com', 'Email principal de la empresa'),
('empresa_direccion', '123 Calle Solar, San Juan, PR 00926', 'Dirección principal de la empresa'),
('whatsapp_numero', '17875550123', 'Número de WhatsApp para el botón flotante'),
('google_analytics_id', 'GA_MEASUREMENT_ID', 'ID de Google Analytics'),
('facebook_pixel_id', 'FB_PIXEL_ID', 'ID del Facebook Pixel');
