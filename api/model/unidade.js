'use strict'

module.exports = (conexao, Sequelize) => {
  const Unidade = conexao.define('unidade', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  nome: {
    type: Sequelize.STRING(50), allowNull: false
  },
  responsavel: {
    type: Sequelize.STRING(50), allowNull: false
  },
  telefone: {
    type: Sequelize.STRING(15), allowNull: false
  },
  celular: {
    type: Sequelize.STRING(15), allowNull: true
  },
  email: {
    type: Sequelize.STRING(45), allowNull: false
  },
  endereco: {
    type: Sequelize.STRING(40), allowNull: false
  },
  complemento: {
    type: Sequelize.STRING(40), allowNull: false
  },
  bairro: {
    type: Sequelize.STRING(40), allowNull: false
  },
  cidade: {
    type: Sequelize.STRING(40), allowNull: false
  },
  estado: {
    type: Sequelize.STRING(15), allowNull: false
  },
  ativo:{
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true
  }
  /*logo:{
    type: Sequelize.STRING, allowNull: true
  }*/
},{
  freezeTableName: true,
  underscored: false
});

  return Unidade;
}