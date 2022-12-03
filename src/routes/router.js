const express = require('express');
const router = express.Router();

const{createUser, getAllUsers, getOneUser, updateOne} = require('../controllers/user');

const{ createsecurity, getOnesecurity} = require('../controllers/security');
const { deleteOnesecurity } = require('../models/security');




//User route
router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user', getOneUser);
router.get('/user', updateOne)

router.post('/security', createsecurity);
router.get('/security', getOnesecurity);
router.delete('/security',)



module.exports = router;

  
