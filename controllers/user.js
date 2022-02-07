const User = require('../models/user')
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.register = async (req, res) => {
    try {
        const user = await new User(req.body);
        await user.save((err, user) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.status(200).json({ user });
        });
    } catch (err) {
        console.error(err.message);
    }
};