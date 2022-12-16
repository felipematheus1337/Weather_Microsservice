import express from "express";
import 'dotenv/config';
import weatherRouter from "./weather.routes";

const app = express();


app.use(express.json());
app.use("/api/v1",weatherRouter);

app.listen(3002, () => {
    console.log(`Server is ready! `);
})

