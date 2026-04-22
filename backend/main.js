const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const customer = require("./Customer/customer");

app.use('/api', customer);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});