const express = require('express');
const router = new express.Router();
// router.use('/currencies/', require('./currencies'));
// router.use('/exchanges/', require('./exchanges'));

// Activate when we Implement User Accounts
router.use('/user', require('./Adduser'));
router.use('/Router',require('./createRouter'))
//router.use('/portfolios', require('./portfolios'));
//  router.use('/cricket', require('./cricket'));
 // router.use('/api3', require('./api3'));
router.get('/', function(req, res) {
  res.sendStatus(400);
});
module.exports = router;
