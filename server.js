const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");


//User Routes
const userRoute = require('./Routes/userPolicy.route');
const authRoute = require('./Routes/auth');

// App Config...
const app = express();                  // instanciating express() in app variable
dotenv.config();                        // to use .env variables
const Port = process.env.Port;

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/users", userRoute);
app.use("/auth", authRoute);



// DB Config
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then ( () => console.log("MongoDB Connected"))
.catch ( (err) => console.log(err));




//Port for listening
app.listen(Port, () => {
    console.log(`Server Running On Port -- ${Port}`);
})