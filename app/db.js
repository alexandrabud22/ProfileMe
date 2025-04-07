// db.js

const { Client } = require('pg'); // Importă clientul PostgreSQL

const client = new Client({
  user: 'localhost',         // Înlocuiește cu utilizatorul tău
  host: 'localhost',
  database: 'root',     // Înlocuiește cu numele bazei tale de date
  password: 'root', // Înlocuiește cu parola ta
  port: 5432,
});

// Funcția care conectează baza de date
const connectToDB = async () => {
    try {
      await client.connect();
      console.log('Connected to the database');
    } catch (err) {
      console.error('DB connection error', err.stack);
    }
  };
  
  module.exports = { connectToDB };