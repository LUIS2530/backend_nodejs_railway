import express from 'express';

import usersRoutes from "./routes/users.js";
import sensoresRoutes from "./routes/sensores.js"
import actuatorsRoutes from "./routes/actuators.js"
import plantsRoutes from "./routes/plants.js"
import paramColorsRoutes from "./routes/paramColors.js"


const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    try{res.send("Welcome to Server!")
    } catch(err){return res.status(404).json({message: err})}})


app.use(usersRoutes);
app.use(sensoresRoutes);
app.use(actuatorsRoutes);
app.use(plantsRoutes);
app.use(paramColorsRoutes);

export default app