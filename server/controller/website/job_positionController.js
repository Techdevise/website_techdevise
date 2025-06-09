const { JobPosition, JobTitle, JobOption } = require('../../models');
const uploadPdf = require("../../utils/uploadPdf");
const { validationResult } = require("express-validator");
module.exports = {
  //  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   JOB Position     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></JOB>



addJobPosition: async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    const {
      first_name,
      last_name,
      email,
      phone,
      country_code,
      message,
      type,
      linkedin_profile,
      about_us,
      job_id,
    } = req.body;

    let pdfFilePath = "";

    // Upload the file if it exists
    if (req.files && req.files.pdf_file) {
      const pdfFile = req.files.pdf_file;
      pdfFilePath = await uploadPdf(pdfFile);
    }

    const getJobs = await JobTitle.findOne({
      where: { status: 1, id: job_id },
    });


    const newJob = await JobPosition.create({
      job_id: job_id,
      first_name,
      last_name,
      email,
      phone,
      country_code,
      message,
      type,
      linkedin_profile,
      about_us,
      pdf_file: pdfFilePath, 
    });

    return res.status(201).json({
      success: true,
      message: "Job position added successfully",
      data: newJob,
    });
  } catch (error) {
    console.error("Error adding job position:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
},



















//  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<   JOB TITLE     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></JOB>
      
   job_listing:async(req,res)=>{
    try {
       const getJobs = await JobTitle.findAll({
        // include:[{
        //   model:JobPosition,
        //   as:"positions"
        // }],
        where:{status:1}
       })
      
         return res.status(200).json({
        success: true,
        message: "Get all job  successfully",
        data: getJobs,
      });
    } catch (error) {
     console.log(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
   },



    job_Option_Listing:async(req,res)=>{
    try {
       const getJobs = await JobOption.findAll({
          include:[{
          model:JobTitle,
          as:"jobtitle"
        }],
        where:{status:1}
       })
      
         return res.status(200).json({
        success: true,
        message: "Get all JobOption  successfully",
        data: getJobs,
      });
    } catch (error) {
     console.log(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: error.message,
      });
    }
   }
};
