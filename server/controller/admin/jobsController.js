const { JobPosition, JobTitle, JobOption } = require("../../models");



module.exports = {


  jobListing: async (req, res) => {
    try {
      const jobs = await JobPosition.findAll({
        include: [
          {
            model: JobOption,
            as: 'joboption',
            include: [
              {
                model: JobTitle,
                as: 'jobtitle'
              }
            ]
          }
        ],
        order: [['id', 'DESC']]
      });


      res.render("pages/jobs/joblist", {
        jobs: jobs,
        title: "Job"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  viewPage: async (req, res) => {
    try {
      const { id } = req.params;
      const job = await JobPosition.findOne({
        include: [{
          model: JobOption,
          as: "joboption",
          include: [{
            model: JobTitle,
            as: "jobtitle"
          }]
        }],
        where: {
          id: id,
        },
      })
      res.render("pages/jobs/jobview", {
        jobs: job,
        title: "Job"
      })
    } catch (error) {
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },





  //  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< JobOption  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></JobOption>

  jobOptionList: async (req, res) => {
    try {
      const jobs = await JobOption.findAll({
        include: [
          {
            model: JobTitle,
            as: 'jobtitle'
          }
        ],
        order: [['id', 'DESC']]
      });


      res.render("pages/jobs/jobOptionlisting", {
        jobs: jobs,
        title: "JobOption"
      });

    } catch (error) {
      console.log(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },

  createPage: async (req, res) => {
    try {
      const job = await JobTitle.findAll();
      res.render("pages/jobs/jobOptionCreate", {
        title: "JobOption",
        job: job
      })
    } catch (error) {
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  addJobOption: async (req, res) => {
    try {
      const { job_id, location, responsibilities, requirements, experience } = req.body;
      await JobOption.create({
        job_id,
        location,
        responsibilities,
        requirements,
        experience
      });

      req.flash("success", "Job option created successfully");
      res.redirect("/admin/joboption");
    } catch (error) {
      console.log(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  updateStatus: async (req, res) => {
    try {

      const userId = req.params.id;
      const { status } = req.body;

      const job = await JobOption.findOne({
        where: {
          id: userId,
        },
      });
      job.status = status;
      await job.save();

      res.json({
        success: true,
        message: 'Job option status updated successfully',
      });

    } catch (error) {
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
    }
  },


  editPage: async (req, res) => {
    try {
      const { id } = req.params;
      const job = await JobOption.findOne({
        where: {
          id: id,
        },
      })
      const jobtitle = await JobTitle.findAll();
      res.render("pages/jobs/jobOptionEdit", {
        job: job,
        title: "JobOption",
        jobtitle: jobtitle
      })

    } catch (error) {
      console.log(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },
  updateJobOption: async (req, res) => {
    try {
      const { job_id, location, responsibilities, requirements, experience } = req.body;
      const jobOptionId = req.params.id;

      const jobOption = await JobOption.findByPk(jobOptionId);
      if (!jobOption) {
        req.flash("error", "Job option not found.");
        return res.redirect("/admin/joboption");
      }

      await jobOption.update({
        job_id,
        location,
        responsibilities,
        requirements,
        experience
      });

      req.flash("success", "Job option updated successfully.");
      res.redirect("/admin/joboption");

    } catch (error) {
      console.error(error);
      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      res.redirect("/admin/joboption");
    }
  },






  //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>subjobTitle listing  with add 

  jobListing: async (req, res) => {
    try {
      const jobs = await JobTitle.findAll({
     
        order: [['id', 'DESC']]
      });


      res.render("pages/jobs/joblist", {
        jobs: jobs,
        title: "Job"
      });

    } catch (error) {
      console.log(error);

      const errorMessage = error.message || 'Something went wrong, please try again later.';
      req.flash("error", errorMessage);
      return res.redirect("/admin/dashboard");
    }
  },

}