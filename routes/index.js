const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);









module.exports = router;


// Below is a fun method that Wes demo'ed. Reverses the string value in the query. This is never used.

//router.get('/reverse/:name', (req,res) => {
//const reverse = [...req.params.name].reverse().join('');
//res.send(reverse);
//});