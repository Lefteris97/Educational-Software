const Post = require('../models/postsModel');

exports.createNewPost = async (req, res, next) =>{
    try {
        let {user_id, title, content} = req.body;

        const post = new Post(user_id, title, content);

        await post.save();

        res.status(201).json({message:"Created new Post"});
    } catch (error) {
        console.log(error);
        next(error);
    }
}