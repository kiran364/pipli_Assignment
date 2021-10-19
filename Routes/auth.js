const router = require('express').Router();
const AuthController = require('../Controllers/auth_controllers.js');
const auth = require("../middleware/auth");



// Private Route, logged In User Can Access it.
router.get("/", auth, AuthController.getUser);


module.exports = router;





