import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";

const mongoURI = "mongodb+srv://dbPsymon:dbPsymonSez@cluster0.xbddk.mongodb.net/BountyHarvest";
const app = express();
const PORT = 3000

mongoose.connect(mongoURI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening at port ${PORT}`);
    });
}).catch((error) => {
    console.log("Unable to connect to database");
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);