const express=require('express');
const { loginController, registerController, logOut } = require('../controllers/authController');
const router=express.Router();

router.post('/login',loginController);
router.post('/register',registerController);
router.post('/logout',logOut);

module.exports=router