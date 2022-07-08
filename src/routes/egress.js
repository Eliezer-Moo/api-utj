const express = require('express');
const router = express.Router();
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/egress');

const egressSchema = require('../schemas/egress');
const validate = require('../middleware/validateData');

router.get('/', validate(egressSchema), getAll);
router.post('/', validate(egressSchema), createOne);
router.put('/:id', updateOne);
router.put('/:id', deleteOne);

module.exports = router;