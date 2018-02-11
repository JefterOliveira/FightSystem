'use strict'

module.exports = (conexao, Sequelize) => {
    const Turma = conexao.define('turma', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    professor: {
        type: Sequelize.STRING(50), allowNull: false
    },
    mensalidade: {
        type: Sequelize.DOUBLE, allowNull: false
    },
    rateio: {
        type: Sequelize.INTEGER, allowNull: false
    },
    ativo:{
        type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true
    }

},{
  freezeTableName: true,
  underscored: false
});

  return Turma;
}