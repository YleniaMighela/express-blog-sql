

const express = require('express')
const router = express.Router();


const postsController = require('../controllers/postsController');




// importo le funzioni dichiarate nel postsController e le associo alle varie rotte, verifico su postman se ci sono problemi
// index 
// GET visualizzo tutti gli elementi posts/
router.get('/', postsController.index);


// show
// GET visualizzo un unico elemento posts/:id
router.get('/:id', postsController.show);



// store
// POST creo un nuovo elemento posts/
router.post('/', postsController.store);



// update
// PUT modifico l'intero elemento posts/:id
router.put('/:id', postsController.update);


// modify
//  PATCH modifico parzialmente l'elemento posts/:id
router.patch('/:id', postsController.modify);


// delete
//  DELETE rimuovo un elemento posts/:id
router.delete('/:id', postsController.destroy);



module.exports = router;

