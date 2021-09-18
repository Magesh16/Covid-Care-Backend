const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/auth");
require('dotenv').config();

app.use(cors({origin: true, credentials: true}));
app.use(express.json());
app.use(express.urlencoded());
app.use('/auth',authRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));