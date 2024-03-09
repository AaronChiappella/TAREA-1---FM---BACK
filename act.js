const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('BIENVENIDO A HOME');
});

app.get('/form', (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; text-align: center; padding: 20px;">

      <h2 style="color: #333;">Formulario de Contacto</h2>

      <form style="max-width: 400px; margin: 0 auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

        <label for="nombre" style="display: block; margin-bottom: 8px; color: #555;">Nombre:</label>
        <input type="text" id="nombre" name="nombre" style="width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;" required>

        <label for="email" style="display: block; margin-bottom: 8px; color: #555;">Correo Electrónico:</label>
        <input type="email" id="email" name="email" style="width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;" required>

        <label for="mensaje" style="display: block; margin-bottom: 8px; color: #555;">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" style="width: 100%; padding: 8px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 4px;" required></textarea>

        <button type="submit" style="background-color: #4caf50; color: #fff; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer;">Enviar</button>
      </form>

    </div>
  `);
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
