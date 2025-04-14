const pool = require("../config/database");

const getPosts = async () => {
    const result = await pool.query("SELECT posts.id, posts.content, posts.image, posts.localization, users.name AS usuario FROM posts LEFT JOIN users ON posts.user_id = users.id");
    return result.rows;
};

const getPostById = async (id) => {
    const result = await pool.query("SELECT posts.id, posts.content, posts.image, posts.localization, users.name AS usuario FROM posts LEFT JOIN users ON posts.user_id = users.id WHERE posts.id = $1", [id]);
    return result.rows[0];
};

module.exports = { getPosts, getPostById }