import mysql from 'mysql2/promise';
import { NoteController } from '../controllers/note-controller.js';
import { Router } from 'express';
var router = Router();

const noteController = new NoteController();

/* GET notes listing. */
router.get('/', function (req, res) {

    noteController.listAll(req, res);

});

/* POST notes listing */
router.post('/', function (req, res) {

    noteController.create(req, res);

});

router.delete('/:id', function (req, res) {

    console.log('Access to delete action with id: ', req.params.id);
    noteController.destroy(req, res);
    
});

router.put('/:id', function (req, res) {
    console.log('Access to update action with id: ', req.params.id);
    noteController.update(req, res);
});


export default router;
