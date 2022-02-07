const User = require('../models/user')
const jwt = require('jsonwebtoken');

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

exports.login = (req, res) => {
    // verifica se o eamil existe 
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'Não tem esse email cadastrado'
            });
        }
        // se o eamil existe verifica se a senha confere com a cadastrada
    
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email ou senha não conferem'
            });
        }
        // gera o token do usuário
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // cadastra usando o token e o tempo de expiração
        res.cookie('t', token, { expire: new Date() + 9999 });
        //retorna o token e o user no front end
        const { _id, name, email, role } = user;
        return res.json({ token, user: { _id, email, name, role } });
    });
}