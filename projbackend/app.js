require("dotenv").config()  // for process.env



const mongoose = require("mongoose");
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors");

const authRoutes = require("./routes/auth")


const app = express()



//DB connected
mongoose.connect(process.env.DATABASE, 
{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true})
.then(()=> console.log("DB CONNECTED"));


const port = 8000;

//middleware

app.use(bodyParser.json());
app.use(cookieParser())
app.use(cors())

//Routes

app.use("/api",authRoutes)


app.listen(port, ()=> console.log("app is running"));