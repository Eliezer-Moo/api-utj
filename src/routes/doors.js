const express = require('express');
const router = express.Router();
const {getAll, createOne, updateOne, deleteOne, addDevice, removeDevice} = require('../controllers/doors');

const doorSchema = require('../schemas/doors');
const validate = require('../middleware/validateData');

router.get('/', getAll);
router.post('/', validate(doorSchema), createOne);
router.post('/add-device/:id', addDevice);
router.put('/:id', validate(doorSchema), updateOne);
router.put('/remove-device:id', removeDevice);
router.delete('/:id', deleteOne);

module.exports = router;