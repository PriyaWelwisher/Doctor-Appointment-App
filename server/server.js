const express = require ("express");
const colors = require ("colors");
const morgan = require ("morgan");
const configDotenv = require ("dotenv");

//dotenv config

configDotenv.config();
//rest object

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.get ("/", (req,res) => {
    res.status(200).send({
        message: "server running sucessfully",
    });
});

//PORT
const port = process.env.PORT || 8080;

//liston port

app.listen(port, () => {
    console.log(`Server Running in ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgCyan.bgYellow

    );
})
