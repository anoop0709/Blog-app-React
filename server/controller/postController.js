import mongoose from "mongoose";
import Posts from "../Model/postSchema.js"

export const getPost = async (req, res) => {
    try {
        const posts = await Posts.find({});
        console.log(typeof (posts));
        res.status(200).json(posts)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const createPost = async (req, res) => {
    console.log(req.body);
    const { post } = req.body;
    const newPost = await Posts.create({...post, creator:req.userId,createdAt: new Date().toISOString()});
    console.log(newPost);
    try {
        res.status(201).json({ newPost });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with this id');
    try {
        const updatedPost = await Posts.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
        res.json(updatedPost);
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');
    try {
        await Posts.findByIdAndRemove(id);
        res.json({ message: "Post deleted succesfully" })
    } catch (error) {
        console.log(error);
    }

}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!req.userId) return res.json({message:"Please signin to like the posts"})
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');
    try {
        const post = await Posts.findById(id);
        const index = post.likes.findIndex((id) => id === String(req.userId));
        if(index === -1){
            post.likes.push(req.userId);
        }else{
            post.likes.filter((id)=> id !== String(req.userId));
        }
        const updatelike = await Posts.findByIdAndUpdate(id,post, { new: true })
        res.json(updatelike);
    } catch (error) {
        console.log(error);
    }
}