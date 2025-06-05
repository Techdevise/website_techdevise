var express = require('express');
const authController = require('../controller/admin/authController');
const jobsController = require('../controller/admin/jobsController');
const contactUsController = require('../controller/admin/contactUsController');
var router = express.Router();
const authMiddleware = require("../middleware/authMiddleware").isAuthenticated;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',authController.loginPage)
router.post('/login',authController.login_post)
router.get('/logout', authController.logout)
router.use(authMiddleware)
router.get('/dashboard',authController.dashboard)

router.get('/jobs',jobsController.jobListing)
router.get('/jobs/:id',jobsController.viewPage)

router.get('/joboption',jobsController.jobOptionList)
router.get('/joboptionCreate',jobsController.createPage)
router.post('/joboption/create',jobsController.addJobOption)
router.put('/joboption/:id/status', jobsController.updateStatus)
router.get('/joboption/:id', jobsController.editPage)
router.post('/joboption/:id/update', jobsController.updateJobOption);


router.get('/cms/:id', authController.listingCms);
router.post('/cms/:id', authController.cmsEditpost);


router.get('/conatct_us', contactUsController.contactListing);
router.get('/conatct_us/:id', contactUsController.contactView);



module.exports = router;
