const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.post('/add/:id', catchErrors(storeController.updateStore));
router.get('/stores/:id/edit', catchErrors(storeController.editStore))









module.exports = router;


// Below is a fun method that Wes demo'ed. Reverses the string value in the query. This is never used.

//router.get('/reverse/:name', (req,res) => {
//const reverse = [...req.params.name].reverse().join('');
//res.send(reverse);
//});