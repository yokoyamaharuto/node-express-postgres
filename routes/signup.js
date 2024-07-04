const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('signup', {
    title: 'Sign up',
  });
});

module.exports = router;

router.post('/', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    const repassword = req.body.repassword;
  });