import {pool} from "../db.js"

// users tasks
export const getActuators = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM ACTUADORES")
    console.log(rows)
    res.json(rows)
}

export const getActuator = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM USUARIOS WHERE idACTUADORES = ?", [
        req.params.id]);
    res.json(rows[0])
}

export const createActuators = async (req, res) => {
    const [results] = await pool.query
        ("INSERT INTO ACTUADORES(DESCRIPTION, ACTUATORS_STATUS, ACTUATORS_TYPE) VALUES (?,?,?)", [
            req.body.DESCRIPTION, 
            req.body.ACTUATORS_STATUS,
            req.body.ACTUATORS_TYPE])
    res.json({
        id: results.insertId,
        ...req.body
        })
}

export const updateActuators = async (req, res) => {
    const results = await pool.query("UPDATE ACTUADORES SET ? WHERE idACTUADORES = ?", [
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204);
}


export const deleteActuators = async (req, res) => {
    await pool.query("DELETE FROM ACTUADORES WHERE idACTUADORES = ?", [req.params.id])
    res.sendStatus(204);
}