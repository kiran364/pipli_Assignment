const router = require("express").Router();
const userPolicyController = require('../Controllers/userPolicyControllers')

//end point to add csv file data to mongodb database
router.post('/', userPolicyController.addData);

//Search API to find policy info with the help of username.
router.get('/', userPolicyController.searchData);

//API to provide aggregated policy by each user.
router.get('/aggregate', userPolicyController.aggregateData)



module.exports = router;