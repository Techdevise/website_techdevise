const { ItRole, HireingRole } = require("../../models");


module.exports={

    

     itroleListing:async(req,res)=>{
       try {
              const Role = await HireingRole.findAll({
                  include: [
                        {
                          model: ItRole,
                          as: 'It_Role',
                        }
                      ],
                order: [['id', 'DESC']]
              });
              
              
              
              res.render("pages/it_Roles/roleListing", {
                role: Role,
                title: "Role_Listing"
              });
          
            } catch (error) {
               console.log(error);
               
              const errorMessage = error.message || 'Something went wrong, please try again later.';
              req.flash("error", errorMessage);
              return res.redirect("/admin/dashboard");
            }
     },

}