const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const router = require("./routes/userRoute");
const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();
connectDB()
app.use(express.json());
app.use(cors())
app.use("/users",router)
app.get("/", (req, res) => {
    res.redirect("/home")
});
app.get("/home", (req, res) => {
    res.end("Helllo qt")
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})