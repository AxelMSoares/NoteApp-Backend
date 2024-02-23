import express, { json, urlencoded } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'

// importation du code des sous routeurs
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import notesRouter from './routes/notes.js';

var app = express();

app.use(cors())
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(static(join(__dirname, 'public')));

// Initialisation du Router
app.use('/notes/', notesRouter);
app.use('/users', usersRouter);
app.use('/', (req, res) => res.send('la bienvenue!'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  
});

app.listen(3000, () => console.log("Serveur API démarré"));
