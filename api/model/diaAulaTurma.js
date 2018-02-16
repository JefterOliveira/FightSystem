'use strict'

module.exports = (conexao, Sequelize) => {
    const DiaAulaTurma = conexao.define('diaaulaturma', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    diaSemana: {
        type: Sequelize.INTEGER, allowNull: false
    }

},{
  freezeTableName: true,
  underscored: false
});

  return DiaAulaTurma;
}