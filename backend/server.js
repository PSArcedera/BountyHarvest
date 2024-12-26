import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
import userRouter from "./routes/userRoute.js";

const mongoURI = "mongodb+srv://dbPsymon:dbPsymonSez@cluster0.xbddk.mongodb.net/BountyHarvest";

mongoose.connect(mongoURI).then(() => {
    app.listen(3000, () => {
        console.log("Server listening at port 3000");
    });
}).catch((error) => {
    console.log("Unable to connect to database");
});

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/users", userRouter);