import { Router } from 'express';
var router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users/' , function (req, res, next){
  res.render ('index', { title : 'Users' });
});

export default router;