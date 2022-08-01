const express = require('express');
const router = express.Router();
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/ingress');

const ingressSchema = require('../schemas/ingress');
const validate = require('../middleware/validateData');

router.get('/', getAll);
router.post('/', createOne);
router.put('/:id', validate(ingressSchema), updateOne);
router.put('/:id', deleteOne);

module.exports = router;