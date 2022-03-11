const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
    
    
});

//DELETE POST

//GET POST
router.get("/:id", async(req,res) =>{
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
    }
} )

module.exports = router;
