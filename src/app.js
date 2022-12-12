import express from 'express';

import usersRoutes from "./routes/users.js"
//import sensoresRoutes from "./routes/sensores.js"

const app = express();

app.use(express.json());


app.get("/", (req, res) => {res.send("Welcome to Server!")})

app.use(usersRoutes);
//app.use(sensoresRoutes);


export default app