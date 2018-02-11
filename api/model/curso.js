'use strict'

module.exports = (conexao, Sequelize) => {
    const Curso = conexao.define('curso', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    nome: {
        type: Sequelize.STRING(50), allowNull: false
    },
    descricao: {
        type: Sequelize.STRING(50), allowNull: false
    },
    ativo:{
        type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true
    }

},{
  freezeTableName: true,
  underscored: false
});

  return Curso;
}