import express from "express"
import dotenv from "dotenv"
import productRoutes from "./routes/products.js"

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/products", productRoutes)
app.listen(PORT, () => {
    console.log("Listening");
    
});

