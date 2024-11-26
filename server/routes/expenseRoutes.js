const express=require('express');
const { addExpense, getExpense, editExpense, deleteExpense } = require('../controllers/expenseController');
const authenticationMiddleware = require('../middlewares/authMiddleware');
const router=express.Router();

router.post('/',authenticationMiddleware,addExpense)
router.get('/',getExpense)
router.patch('/:id',editExpense)
router.delete(':id',deleteExpense)

module.exports=router;