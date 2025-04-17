const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: Gerenciamento de Posts
 */

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Lista de todos os posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: Lista de todos os Posts!
 */

router.get("/posts", postController.getAllPosts);

/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Busca Post por ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post encontrado
 *       404:
 *         description: Post não encontrado
 */

router.get("/posts/:id", postController.getPostById);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Cria um novo Post
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: number
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *               localization:
 *                 type: string
 *     responses:
 *       201:
 *         description: Post criado com sucesso!
 */

router.post("/posts", postController.createPost);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Deleta um Post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Post deletado com sucesso!
 */

router.delete("/posts/:id", postController.deletePost);

/**
 * @swagger
 * /api/posts/{id}:
 *   put:
 *     summary: Atualiza um Post
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post atualizado com sucesso!
 *       404:
 *          description: Erro ao atualizar Post!
 */

router.put("/posts/:id", postController.updatePost);

module.exports = router;