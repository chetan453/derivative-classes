const express = require("express");

const app = express();
const connectDB = require("./config/db");

const port = process.env.PORT || 8082;
const router = require("./routes/routes");
const candidate = require("./routes/candidate");
const payment = require("./routes/payment")
const cors = require("cors")


connectDB();

app.use(cors({ origin: true, credentials: true }));


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello welcome to the server");
})

app.use("/candidate-registration", candidate);

app.use("/coupen", router);
app.use("/payment", payment);

app.listen(port, () => {
    console.log(`app is listening at port http://localhost:${port}`);
})
