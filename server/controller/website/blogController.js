
const { Blogs } = require("../../models");


module.exports = {
    listing_blogs: async (req, res) => {

        try {
            const blog = await Blogs.findAll({
                where: { status: 1 }
            })

            return res.status(200).json({
                success: true,
                message: "Get all blogs  successfully",
                data: blog,
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

}
