const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey");


router.use(apiKeyMiddleware)

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de Users
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Lista todos os users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de Users
 */

router.get("/users", userController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Busca User por ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User encontrado
 *       404:
 *         description: User não encontrado
 */

router.get("/users/:id", userController.getUser);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Cria um novo user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: integer
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: User criado com sucesso!
 */

router.post("/users", upload.single("photo"), userController.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deleta um user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: User deletado com sucesso!
 */

router.delete("/users/:id", userController.deleteUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Atualiza um User
 *     tags: [Users]
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User atualizado com sucesso!
 */

router.put("/users/:id", userController.updateUser);

module.exports = router;