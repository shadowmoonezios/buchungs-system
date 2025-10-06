const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/buchungs-system', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});