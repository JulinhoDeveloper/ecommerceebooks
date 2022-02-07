exports.userRegistroValidator = (req, res, next) => {
    req.check('name', 'O nome é obrigatório').notEmpty();
    req.check('email', 'O email precisa ter de 3 a 32 caracteres')
        .matches(/.+\@.+\..+/)
        .withMessage('Email precisa ter @')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Senha é obrigatória').notEmpty();
    req.check('password')
        .isLength({ min: 6 })
        .withMessage('A senha precisa ser acima de 6 caracteres')
        .matches(/\d/)
        .withMessage('A senh precisa ter um número');
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next();
};