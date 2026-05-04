```javascript
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// Define routes
const routes = {
  '/': handleHome,
  '/about': handleAbout,
  '/api/users': handleUsers,
  '/api/data': handleData,
  '/contact': handleContact,
  '/404': handleNotFound
};

// Home route
function handleHome(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Mini Servidor HTTP</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f0f0f0; }
        h1 { color: #333; }
        ul { list-style: none; padding: 0; }
        li { margin: 10px 0; }
        a { color: #0066cc; text-decoration: none; padding: 8px 12px; background: white; border-radius: 4px; display: inline-block; }
        a:hover { background: #e0e0e0; }
      </style>
    </head>
    <body>
      <h1>🚀 Mini Servidor HTTP</h1>
      <p>Bienvenido al servidor básico. Navega por las rutas disponibles:</p>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/api/users">API: Usuarios</a></li>
        <li><a href="/api/data">API: Datos</a></li>
      </ul>
    </body>
    </html>
  `);
}

// About route
function handleAbout(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Acerca de</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f0f0f0; }
        h1 { color: #333; }
        a { color: #0066cc; text-decoration: none; }
      </style>
    </head>
    <body>
      <h1>📖 Acerca de</h1>
      <p>Este es un mini servidor HTTP desarrollado con Node.js.</p>
      <p>Características:</p>
      <ul>
        <li>Rutas estáticas</li>
        <li>API JSON</li>
        <li>Manejo de errores 404</li>
        <li>Interfaz HTML simple</li>
      </ul>
      <p><a href="/">← Volver al inicio</a></p>
    </body>
    </html>
  `);
}

// Contact route
function handleContact(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Contacto</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; background: #f0f0f0; }
        h1 { color: #333; }
        form { background: white; padding: 20px; border-radius: 4px; max-width: 400px; }
        input, textarea { width: 100%; padding: 8px; margin: 8px 0; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; }
        button { background: #0066cc; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        a { color: #0066cc; text-decoration: none; display: block; margin-top: 15px; }
      </style>
    </head>
    <body>
      <h1>✉️ Contacto</h1>
      <form>
        <input type="text" placeholder="Tu nombre" required>
        <input type="email" placeholder="Tu email" required>
        <textarea placeholder="Tu mensaje" rows="5" required></textarea>
        <button type="submit">Enviar (demo)</button>
      </form>
      <a href="/">← Volver al inicio</a>
    </body>
    </html>
  `);
}

// API: Users
function handleUsers(req, res) {
  const users = [
    { id: 1, name: 'Juan', email: 'juan@example.com', role: 'admin' },
    { id: 2, name: 'María', email: 'maria@example.com', role: 'user' },
    { id: 3, name: 'Carlos', email: 'carlos@example.com', role: 'user' },
    { id: 4, name: 'Ana', email: 'ana@example.com', role: 'moderator' }
  ];
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'success', data: users, count: users.length }, null, 2));
}

// API: Data
function handleData(req, res) {
  const data = {
    timestamp: new Date().toISOString(),
    server: 'Mini HTTP Server',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime