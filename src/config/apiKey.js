require('dotenv').config();

const apiKeyMiddleware = (req, res, next) => {
    const clientApiKey = req.headers['x-api-key'];
    const serverKey = process.env.API_KEY;

    if (!clientApiKey) {
        return res.status(401).json({ error: 'Chave da API não fornecida!'})
    }
    if (clientApiKey !== serverKey) {
        return res.status(403).json({ error: 'Chave da API inválida!'})
    }

    next();
};

module.exports = apiKeyMiddleware;