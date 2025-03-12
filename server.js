const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db'); // Импортиране на връзката с базата данни
const dressesRoutes = require('./api/dressesRoutes');

// Използване на bodyParser за обработка на POST заявки
app.use(bodyParser.json());

// API за добавяне на нова рокля
app.post('/add-dress', (req, res) => {
    const { name, fabric, image } = req.body;

    // SQL заявка за добавяне на рокля
    const query = 'INSERT INTO dresses (name, fabric, image) VALUES (?, ?, ?)';
    connection.query(query, [name, fabric, image], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Грешка при добавяне на рокля.' });
        }
        res.status(200).json({ message: 'Роклята е добавена успешно.' });
    });
});

// API за извличане на всички рокли
app.get('/get-dresses', (req, res) => {
    const query = 'SELECT * FROM dresses';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Грешка при извличането на рокли.' });
        }
        res.status(200).json(results);
    });
});

// Стартиране на сървъра на порт 5000
app.listen(5000, () => {
    console.log('Сървърът работи на порт 5000');
});

