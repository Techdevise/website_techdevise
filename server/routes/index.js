var express = require('express');
const authController = require('../controller/admin/authController');
const jobsController = require('../controller/admin/jobsController');
const contactUsController = require('../controller/admin/contactUsController');
const itRolesController = require('../controller/admin/itRolesController');
const blogController = require('../controller/admin/blogController');
const settingController = require('../controller/admin/settingController');
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

router.get('/jobsliting',jobsController.jobTitleListing)
router.put('/jobsliting/:id/status', jobsController.updateStatusJob)
router.get('/jobsubliting/:job_id',jobsController.jobSubTitleListing)
router.get('/jobsub_Create/:job_id', jobsController.createPageSub);
router.post('/jobsub_Create/create', jobsController.addSubJob);
router.put('/jobsubliting/:id/status', jobsController.updateStatusSub)

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

router.get('/setting/:id', settingController.listingSetting);
router.post('/setting/:id', settingController.settingEditpost);

router.get('/contact_us', contactUsController.contactListing);
router.get('/contact_us/:id', contactUsController.contactView);
router.get('/experts', contactUsController.expertListing);
router.get('/experts/:id', contactUsController.expertView);

router.get('/roles', itRolesController.itroleListing);
router.get('/roles/:id', itRolesController.viewRoles);
router.delete('/roles/delete/:id', itRolesController.deleteRole);


router.get('/blogs',blogController.blogListing)
router.get('/blog_Create',blogController.createPage)
router.post('/blogs/create',blogController.addBlogOption)
router.put('/blogs/:id/status', blogController.updateStatus)
router.get('/blogs/:id', blogController.editPage)
router.post('/blogs/:id/update', blogController.updateBlogOption);

module.exports = router;
