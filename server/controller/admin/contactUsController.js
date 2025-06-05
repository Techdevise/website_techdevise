const { ContactUs ,SpeakExperts} = require("../../models");


module.exports={

  // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<  contactUs 
        contactListing: async (req, res) => {
      try {
        const contacts = await ContactUs.findAll({
          order: [['id', 'DESC']]
        });
        
    
        res.render("pages/contactUs/listing", {
          contacts: contacts,
          title: "Contact_us"
        });
    
      } catch (error) {
         console.log(error);
         
        const errorMessage = error.message || 'Something went wrong, please try again later.';
        req.flash("error", errorMessage);
        return res.redirect("/admin/dashboard");
      }
    },
        contactView: async (req, res) => {
      try {
         const {id} = req.params
        const contacts = await ContactUs.findOne({
            where:{id:id},
          order: [['id', 'DESC']]
        });
        
    
        res.render("pages/contactUs/view", {
          contacts: contacts,
          title: "Contact_us"
        });
    
      } catch (error) {
         console.log(error);
         
        const errorMessage = error.message || 'Something went wrong, please try again later.';
        req.flash("error", errorMessage);
        return res.redirect("/admin/dashboard");
      }
    },




    // <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Speak with our Experts



            expertListing: async (req, res) => {
      try {
        const experts = await SpeakExperts.findAll({
          order: [['id', 'DESC']]
        });
        
    
        res.render("pages/experts/listing", {
          expert: experts,
          title: "Experts"
        });
    
      } catch (error) {
         console.log(error);
         
        const errorMessage = error.message || 'Something went wrong, please try again later.';
        req.flash("error", errorMessage);
        return res.redirect("/admin/dashboard");
      }
    },
         expertView: async (req, res) => {
      try {
         const {id} = req.params
        const experts = await SpeakExperts.findOne({
            where:{id:id},
          order: [['id', 'DESC']]
        });
        
    
        res.render("pages/experts/view", {
          expert: experts,
          title: "Experts"
        });
    
      } catch (error) {
         console.log(error);
         
        const errorMessage = error.message || 'Something went wrong, please try again later.';
        req.flash("error", errorMessage);
        return res.redirect("/admin/dashboard");
      }
    },
}
