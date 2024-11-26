const express=require('express');
const { addExpense, getExpense, editExpense, deleteExpense } = require('../controllers/expenseController');
const router=express.Router();

router.post('/',addExpense)
router.get('/',getExpense)
router.patch('/:id',editExpense)
router.delete(':id',deleteExpense)

module.exports=router;