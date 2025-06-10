var express = require('express');
const { jobValidationRules } = require("../validators/jobValidator");
const job_positionController = require('../controller/website/job_positionController');
const contactUsController = require('../controller/website/contactUsController');
const itRolesController = require('../controller/website/itRolesController');
const blogController = require('../controller/website/blogController');
var apiRouter = express.Router();

 apiRouter.post('/job_position' ,jobValidationRules,job_positionController.addJobPosition)
 apiRouter.get('/jobs' ,job_positionController.job_listing)
 apiRouter.get('/jobs_Options/:job_id' ,job_positionController.job_Option_Listing)
 apiRouter.post('/contact_us' ,contactUsController.add_Contact)
 apiRouter.post('/experts' ,contactUsController.add_Experts)

  apiRouter.get('/roles' ,itRolesController.ListingRole)
  apiRouter.post('/roles/create' ,itRolesController.createRole)

    apiRouter.get('/blogs' ,blogController.listing_blogs)

module.exports = apiRouter;
