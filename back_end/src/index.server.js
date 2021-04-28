const express = require('express');
const env = require('dotenv');
const app = express();
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/user');

env.config();

app.get("/",(req,res)=>{
    res.header("Content-Type","application/json");
    res.send(JSON.stringify(data));
  })

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ygtek.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(() => {
    console.log('Database connected');
});


app.use(bodyParser());
app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});