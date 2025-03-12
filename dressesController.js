const connection = require('../db');

// Получаване на всички рокли
exports.getAllDresses = (req, res) => {
  const query = 'SELECT * FROM dresses';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Грешка при извличането на рокли.' });
    }
    res.status(200).json(results);
  });
};

// Добавяне на нова рокля
exports.addDress = (req, res) => {
  const { name, fabric, image } = req.body;
  const query = 'INSERT INTO dresses (name, fabric, image) VALUES (?, ?, ?)';
  connection.query(query, [name, fabric, image], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Грешка при добавяне на рокля.' });
    }
    res.status(200).json({ message: 'Роклята е добавена успешно.' });
  });
};

// Може да добавите и функции за актуализиране и изтриване
