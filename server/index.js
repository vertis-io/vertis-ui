require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../client/public')));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));
app.listen(PORT, ()=> {
  console.log(`Vertis-UI is up and listening on PORT:${PORT}`);
});