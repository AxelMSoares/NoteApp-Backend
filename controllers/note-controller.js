import mysql from 'mysql2/promise';

export class NoteController {

    async listAll(req, res) {
        console.log('NoteController should list them all');
        const dbConnection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            database: 'notes'
        });

        console.log('connexion db reussie');
        const [results, fields] = await dbConnection.query('SELECT * from notes');
        res.send(results);

    }

    async create(req, res){
        console.log('note Controller create');
        const newNote = req.body;
        console.log('newNote :', newNote);

        
        const dbConnection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            database: 'notes'
        });

        const [results, fields] = await dbConnection.query('INSERT INTO notes (text) VALUES (?)', [req.body.text]);

        res.json({message: "note added to db"});
    }

    async destroy(req, res){
        const dbConnection = await mysql.createConnection({
            host: '127.0.0.1',
            user: 'root',
            database: 'notes'
        });

        const [results, fields] = await dbConnection.query('DELETE FROM notes where id = ?', [req.params.id]);

        res.json({message: "note deleted", results});
    }
}