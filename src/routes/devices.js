const express = require('express');
const router = express.Router();
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/devices');

const deviceSchema = require('../schemas/devices');
const validate = require('../middleware/validateData');

router.get('/', getAll);
router.post('/', validate(deviceSchema), createOne);
router.put('/:id', validate(deviceSchema), updateOne);
router.delete('/:id', deleteOne);

module.exports = router;