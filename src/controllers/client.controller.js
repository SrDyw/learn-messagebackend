import { pool } from "../database.js";

export const loadMessages = async(req, res) => {
    try {
        const [messages] = await pool.query('SELECT * FROM messages');
        res.render('root', {
            data: messages
        });
    } catch {
        res.send("Something where wrong!");
    }

}   

export const indexRoute = (req, res) => {
    res.send("WELCOME");
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