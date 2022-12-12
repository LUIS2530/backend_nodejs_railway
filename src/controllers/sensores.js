import {pool} from "../db.js"

// users tasks
export const getUsers = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM USUARIOS")
    console.log(rows)
    res.json(rows)
    //res.send("Hello World!!!")
}

export const getUser = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM USUARIOS WHERE idUSUARIOS = ?", [
        req.params.id]);
    res.json(rows[0])
    //console.log(req.params.id)
    //res.json(rows)
    //res.send("Hello World!!!")
}

export const createUser = async (req, res) => {
    const [results] = await pool.query
        ("INSERT INTO USUARIOS(EMAIL, E_PASSWORD, NAME, SURNAME, PHONE) VALUES (?,?,?,?,?)", [
            req.body.email, 
            req.body.password,
            req.body.name,
            req.body.surname,
            req.body.phone])
    res.json({
        id: results.insertId,
        ...req.body
        })
            //console.log(result)
    //res.send("Nuevo Usuario Creado")
}

export const updateUser = async (req, res) => {
    const results = await pool.query("UPDATE USUARIOS SET ? WHERE idUSUARIOS = ?", [
        req.body,
        req.params.id
    ])
    console.log(results)
    res.sendStatus(204);
}


export const deleteUser = async (req, res) => {
    await pool.query("DELETE FROM USUARIOS WHERE idUSUARIOS = ?", [req.params.id])
    res.sendStatus(204);
}