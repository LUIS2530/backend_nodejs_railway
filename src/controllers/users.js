import {pool} from "../db.js"

// users tasks
export const getUsers = async (req, res) => {
    try {
    const [rows] = await pool.query("SELECT * FROM USUARIOS")
    //console.log(rows)
    res.json(rows)
    } catch (err) {
        return res.status(404).json({message: err});
    }
}

export const getUser = async (req, res) => {
    try{
    const [rows] = await pool.query("SELECT * FROM USUARIOS WHERE idUSUARIOS = ?", [
        req.params.id]);
    res.json(rows[0])
    } catch (err) {
        return res.status(404).json({message: err});
    }
    //console.log(req.params.id)
    //res.json(rows)
    //res.send("Hello World!!!")
}

export const createUser = async (req, res) => {
    try{
        const [results] = await pool.query
        ("INSERT INTO USUARIOS(EMAIL, E_PASSWORD, NAME, SURNAME, PHONE) VALUES (?,?,?,?,?)", [
            req.body.EMAIL, 
            req.body.E_PASSWORD,
            req.body.NAME,
            req.body.SURNAME,
            req.body.PHONE])
        res.json({
            id: results.insertId,
            ...req.body
            })
    }catch (err) {
        return res.status(404).json({message: err});
    }
    //console.log(result)
    //res.send("Nuevo Usuario Creado")
}

export const updateUser = async (req, res) => {
    try{
        const results = await pool.query("UPDATE USUARIOS SET ? WHERE idUSUARIOS = ?", [
            req.body,
            req.params.id
        ])
        console.log(results)
        res.sendStatus(204);
    } catch (err){
        return res.status(404).json({message: err});
    }
    
}

export const deleteUser = async (req, res) => {
    try{
        await pool.query("DELETE FROM USUARIOS WHERE idUSUARIOS = ?", [req.params.id])
        res.sendStatus(204);
    } catch (err) {
        return res.status(404).json({message: err});
    }
    
}