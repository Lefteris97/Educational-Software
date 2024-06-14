const Reply = require('../models/repliesModel');

exports.createNewReply = async (req, res, next) =>{
    try {
        let {user_id, post_id, content} = req.body;

        const reply = new Reply(user_id, post_id, content);

        await reply.save();

        res.status(201).json({message:"Created new Reply"});
    } catch (error) {
        console.log(error);
        next(error);
    }
}