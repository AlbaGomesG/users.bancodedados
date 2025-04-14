const pool = require("../config/database");

const getPosts = async () => {
    const result = await pool.query("SELECT posts.id, posts.content, posts.image, posts.localization, users.name AS usuario FROM posts LEFT JOIN users ON posts.user_id = users.id");
    return result.rows;
};

module.exports = { getPosts }