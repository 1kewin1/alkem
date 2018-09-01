var express = require("express");
var router = express.Router();
var apptCtrl = require("./app.controllers");

router.get('/getUserData',apptCtrl.getUserData);
router.post('/insertUserData',apptCtrl.insertUserData);
router.post('/removeRecord',apptCtrl.removeRecord);
router.post('/createRemedy',apptCtrl.createRemedy);

module.exports = router;