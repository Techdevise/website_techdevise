var express = require('express');
const { jobValidationRules } = require("../validators/jobValidator");
const job_positionController = require('../controller/website/job_positionController');
var apiRouter = express.Router();

 apiRouter.post('/job_position' ,jobValidationRules,job_positionController.addJobPosition)
 apiRouter.get('/jobs' ,job_positionController.job_listing)

module.exports = apiRouter;
