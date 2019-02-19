const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
	res.render('homepage',{
		  test: 'darek',
			title: 'myhomepage',
			pic1: '/pic1.jpg',
			myname: 'darek'
						 })
})





module.exports = router;