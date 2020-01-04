const express = require('express');

const router = express.Router();

router.get('/view',function(req,res){
    res.render('view');
})