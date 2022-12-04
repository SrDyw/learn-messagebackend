import { pool } from "../database.js";

export const indexRoute = async(req, res) => {
    const [messages] = await pool.query('SELECT * FROM messages');
    res.render('root', {
        data: messages
    });

}   

export const sendMessage = async(req, res) => {
    const user = 'pepe';
    const message = req.body.message;

    if (message != '') {
        const result = await pool.query('INSERT INTO messages (username, message) VALUES(?, ?)', [user, message]); 
    }


    return res.redirect('/');
}

export const deleteMessage  = async(req, res) => {
    const result = await pool.query('DELETE FROM messages WHERE id = ?', [req.params.id]);
    return res.redirect('/');
}