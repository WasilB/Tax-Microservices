import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import taxRouter from "./routes/tax";
import taxGroupRouter from "./routes/taxGroup";
import { json } from "body-parser";


// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {    

    console.log("Express application is up and running on port 3000");

}).catch(error => console.log("TypeORM connection error: ", error));

// create express app
const app = express();
app.use(bodyParser.json());
app.use('/tax',taxRouter)
app.use('/tax/taxGroup',taxGroupRouter)
app.get("/",(req,res) =>
{
    res.send("Homepage")
})



// run app
app.listen(3000);