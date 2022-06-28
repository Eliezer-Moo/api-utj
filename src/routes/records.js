const express = require('express');
const router = express.Router();
const {getAll, createOne, updateOne, deleteOne} = require('../controllers/records');

router.get('/', getAll);
router.post('/', createOne);
router.put('/', updateOne);
router.put('/', deleteOne);

module.exports = router;