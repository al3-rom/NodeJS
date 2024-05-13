import express from "express";
import 'dotenv/config';

const app = express();
const port = process.env.port || 3000;


app.get(`/`, (req, res) => {
    res.send(`Hello World!`)
});

app.listen(port, () => {

    console.log(`Server is running on http://localhost:${[port]}`);
})