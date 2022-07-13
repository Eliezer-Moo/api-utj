const express = require('express');
const router = express.Router();
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/doors');

const doorSchema = require('../schemas/doors');
const validate = require('../middleware/validateData');

router.get('/', getAll);
router.post('/', validate(doorSchema), createOne);
router.put('/:id', validate(doorSchema), updateOne);
router.delete('/:id', deleteOne);

module.exports = router;