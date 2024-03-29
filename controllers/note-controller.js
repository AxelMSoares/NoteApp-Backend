import mysql from 'mysql2/promise';

export class NoteController {

    async dbConnection() {

        const dbConnection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            database: 'notes'
        });

        return dbConnection;

    }

    async listAll(req, res) {
        
        const dbConnection = await this.dbConnection();
        console.log('connexion db reussie');
        const [results, fields] = await dbConnection.query('SELECT * from notes');
        res.send(results);

    }

    async create(req, res) {

        console.log('note Controller create');
        const newNote = req.body;
        const dbConnection = await this.dbConnection();
        const [results, fields] = await dbConnection.query('INSERT INTO notes (text) VALUES (?)', [req.body.text]);

        res.json({ message: "note added to db" });
    }

    async destroy(req, res) {
    
        const dbConnection = await this.dbConnection();
        const [results, fields] = await dbConnection.query('DELETE FROM notes where id = ?', [req.params.id]);

        res.json({ message: "note deleted", results });
    }

    async update (req, res) {

        const dbConnection = await this.dbConnection();

        const id = req.params.id;
        const value = req.body.text;
        const [results, fields] = await dbConnection.query('UPDATE notes SET text = ? WHERE id = ?', [value, id]);

        res.json({ message: "note successfully updated", results });
    }
}