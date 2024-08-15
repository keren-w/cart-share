const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to MongoDB and initialize collections (pre-volume)
( async () => {connectDB();})();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', require('./routes/users.routes'));
app.use('/api/v1/products', require('./routes/products.routes'));
app.use('/api/v1/carts', require('./routes/carts.routes'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
