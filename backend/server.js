import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv"
dotenv.config({path: "./config.env"})

const app = express();
const PORT = 3000

mongoose.connect(process.env.ATLAS_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    });
}).catch((error) => {
    console.error(error);
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);