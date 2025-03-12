const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // Тук замени с твоето MySQL потребителско име (обикновено 'root')
    password: '8888',  // Замени с твоята MySQL парола
    database: 'balldresses'
});

connection.connect((err) => {
    if (err) {
        console.error('Грешка при свързване с MySQL:', err);
        return;
    }
    console.log('Успешно свързване с MySQL');
});

module.exports = connection;
