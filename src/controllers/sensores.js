import {pool} from "../db.js"

// users tasks
export const getSensors = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM SENSORES")
    console.log(rows)
    res.json(rows)
    //res.send("Hello World!!!")
}

export const getSensor = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM SENSORES WHERE idSENSORES = ?", [
        req.params.id]);
    res.json(rows[0])
}

export const createSensors = async (req, res) => {
    const [results] = await pool.query
        ("INSERT INTO SENSORES(DESCRIPTION, SENSOR_STATUS, SENSOR_TYPE, SENSOR_DATA) VALUES (?,?,?,?)", [
            req.body.DESCRIPTION, 
            req.body.SENSOR_STATUS,
            req.body.SENSOR_TYPE,
            req.body.SENSOR_DATA])
    res.json({
        id: results.insertId,
        ...req.body
        })
            //console.log(result)
    //res.send("Nuevo Usuario Creado")
}

export const updateSensors = async (req, res) => {
    const results = await pool.query("UPDATE SENSORES SET ? WHERE idSENSORES = ?", [
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204);
}


export const deleteSensors = async (req, res) => {
    await pool.query("DELETE FROM SENSORES WHERE idSENSORES = ?", [req.params.id])
    res.sendStatus(204);
}