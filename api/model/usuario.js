'use strict'

module.exports = (conexao, Sequelize) => {
    const Usuario = conexao.define('usuario', {
    id: {
        type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
    },
    nome: {
        type: Sequelize.STRING(60), allowNull: false
    },
    email:{
        type: Sequelize.STRING(60), allowNull: false, isEmail: true, unique: true
    },
    senha:{
        type: Sequelize.STRING(60), allowNull: false, len: [6,60]
    }
},{
  freezeTableName: true,
  underscored: false
});

  return Usuario;
}