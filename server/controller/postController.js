import Posts from "../Model/postSchema.js"

export const getPost = async(req,res)=>{
    try {
        const posts = await Posts.find();
        res.status(200).json({posts})
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }

}

export const createPost =async (req,res)=>{
    const post = req.body;
    const newPost = new Posts(post);
    try {
        await newPost.save();
        res.status(201).json({newPost});
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}