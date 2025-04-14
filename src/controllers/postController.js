const postModel = require("../models/postModel");

const getAllPosts = async (req, res) => {
    try {
        const posts = await postModel.getPosts();
        res.status(200).json(posts);
    } catch {
        res.status(500).json({ message: "Erro ao encontrar posts!"});
    }
};

module.exports = { getAllPosts };