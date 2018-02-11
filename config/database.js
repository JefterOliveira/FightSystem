'use strict'

const Sequelize = require('sequelize');
const conexao = new Sequelize('fightsystem', 'root', 'maribibi', {
  host: 'localhost',
  dialect: 'mysql',
});

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.conexao = conexao;

//models/tables
db.unidade = require('../api/model/unidade')(conexao, Sequelize)
db.turma = require('../api/model/turma')(conexao, Sequelize)
db.curso = require('../api/model/curso')(conexao, Sequelize)
db.aluno = require('../api/model/aluno')(conexao, Sequelize)
db.categoria = require('../api/model/categoria')(conexao, Sequelize)

//relacionamentos
db.unidade.hasMany(db.turma, { foreignKey: 'unidadeReferencia' })
db.turma.belongsTo(db.unidade, { foreignKey: 'unidadeReferencia' })

db.curso.hasMany(db.turma, {foreignKey: 'cursoReferencia'})
db.turma.belongsTo(db.curso, { foreignKey: 'cursoReferencia' })

db.turma.hasMany(db.aluno, {foreignKey: 'turmaReferencia'})
db.aluno.belongsTo(db.turma, { foreignKey: 'turmaReferencia' })

db.categoria.hasMany(db.aluno, {foreignKey: 'categoriaReferencia'})
db.aluno.belongsTo(db.categoria, { foreignKey: 'categoriaReferencia' })

//fim do bloco de relacionamentos

conexao.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    conexao.sync({force:true}).then(() => {
        console.log('Modelo sincronizado com o banco.');
    })
    .catch(err => {
        console.error('Erro na sincronizacao do modelo com o banco', err);
    });
})
.catch(err => {
    console.error('Unable to connect to the database:', err);
});

module.exports = db;  
