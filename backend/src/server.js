const express = require('express');
const cors = require('cors')

const app = express();
const conn = require('./config/database');
const router = require('./routes');

app.use(express.json());
app.use(cors());

app.use(router);

conn();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`👩‍💻 Server running on port: ${PORT}`);
});