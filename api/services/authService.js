const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require('../../config/database') 
const env = require('../../env')

const emailRegex = /\S+@\S+\.\S+/

const login = (req, res, next) => {
    const email = req.body.email || ''
    const senha = req.body.senha || ''

    db.usuario.find({where: {email: email}}).then(usuario => {
        //verifica se o hash da senha armazenada foi gerada a partir da senha informada
        if(usuario && bcrypt.compareSync(senha, usuario.senha)){
            const token = jwt.sign(usuario, env.authSecret, {
                expiresIn: '1 day'
            })
            res.status(200).json({nome: usuario.nome, email: usuario.email, token: token})
        }
        else{
            res.status(400).json('Usuário ou senha inválidos');
        }

    }).catch(error => res.status(500).json('erro interno'))
}

/*const validateToken = (req, res, next) => {
    const token = req.body.token || ''
    jwt.verify(token, env.authSecret, function(error, decoded){
        return res.status(200)
    })
}*/

const signup = (req, res, next) => {
    const nome = req.body.nome || ''
    const email = req.body.email || ''
    const senha = req.body.senha || ''
    const confirmaSenha = req.body.confirmaSenha || ''

    if(!email.match(emailRegex)){
        return res.status(400).json('E-mail informado em formato inválido')
    }

    const salt = bcrypt.genSalt()
    const senhaHash = bcrypt.hashSync(senha, salt)
    if(!bcrypt.compareSync(confirmaSenha, senhaHash)){
        return res.status(400).json('Senha e confirmação de senha não conferem')
    }

    db.usuario.find({where: {email: email}}).then( usuario => {
        if(usuario){
            return res.status(400).json('E-mail já cadastrado')
        }
        db.usuario.create({
            nome: nome,
            email: email,
            senha: senhaHash
        }).then(result => {
            console.log(result)
            return res.status(200)
        }).catch(error => {
            console.log(error)
            return res.status(500).json('erro interno')
        })

    }).catch(error => res.status(500).json('erro interno'))

}