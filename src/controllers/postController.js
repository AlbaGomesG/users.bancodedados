const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getPosts();
        res.status(200).json(posts);
    } catch {
        res.status(500).json({ message: "Erro ao encontrar posts!"});
    }
};

const getPostById = async (req, res) => {
    try {
        const post = await postModel.getPostById(req.params.id);
        if(!post) {
            return res.status(404).json({ message: "Post não encontrado" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Erro ao encontrar Post!"})
    }
};

module.exports = { getAllPosts, getPostById };