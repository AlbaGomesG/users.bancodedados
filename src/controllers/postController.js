const pool = require("../config/database");
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

const createPost = async (req, res) => {
    try {
        const { user_id, content, image, localization } = req.body;
        const newPost = await postModel.createPost(user_id, content, image, localization);
        res.status(200).json({ message: "Post criado com sucesso!", newPost});
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar Post!"});
    }
};

const updatePost = async (req, res) => {
    try {
        const { content, image } = req.body;
        const updatePost = await postModel.updatePost(req.params.id, content, image);
        if (!updatePost) {
            return res.status(404).json({ message: "Post não encontrado!" });
        }
        res.status(200).json({ message: "Post atualizado com sucesso!", updatePost})
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar Post!"})
    }
};

module.exports = { getAllPosts, getPostById, createPost, updatePost };