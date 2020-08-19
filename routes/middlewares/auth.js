const validateToken = (req, res, next) => {
    console.log(req, res, next)
    const token = req.headers['Authorization'];
    if (!token) return res.status(401).send('unauthorized')

    next();
}

module.exports = validateToken;