import express from 'express';

import usersRoutes from "./routes/users.js";
//import sensoresRoutes from "./routes/sensores.js"

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    try{res.send("Welcome to Server!")
    } catch(err){return res.status(404).json({message: err})}})

app.use((req, res, next) => {
    res.status(400).json({message: "enpoint not found"})
})


app.use(usersRoutes);
//app.use(sensoresRoutes);


export default app