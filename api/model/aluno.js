'use strict'
const alunoSituacaoEnum = require('../enum/alunoSituacaoEnum')

module.exports = (conexao, Sequelize) => {
  const Aluno = conexao.define('aluno', {
  id: {
    type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false
  },
  arteMaisTreinada: {
    type: Sequelize.STRING(50), allowNull: true
  },
  tempoArteMaisTreinada: {
    type: Sequelize.STRING(50), allowNull: true
  },
  graduacao: {
    type: Sequelize.STRING(15), allowNull: true
  },
  deuAula: {
    type: Sequelize.BOOLEAN, allowNull: true
  },
  equivalencia: {
    type: Sequelize.BOOLEAN, allowNull: true
  },
  /*documentos: {  arquivooo
    type: Sequelize.TEXT, allowNull: false   
  },*/
  comoConheceu: {
    type: Sequelize.STRING(100), allowNull: true
  },
  nome: {
    type: Sequelize.STRING(50), allowNull: false
  },
  nomePai: {
    type: Sequelize.STRING(50), allowNull: true
  },
  nomeMae: {
    type: Sequelize.STRING(50), allowNull: true
  },
  dataNascimento: {
    type: Sequelize.DATEONLY, allowNull: false
  },
  sexo: {
    type: Sequelize.STRING(2), allowNull: false
  },
  identidade: {
    type: Sequelize.STRING(15), allowNull: false
  },
  orgao: {
    type: Sequelize.STRING(15), allowNull: false
  },
  cpf: {
    type: Sequelize.STRING(15), allowNull: false
  },
  endereco: {
    type: Sequelize.STRING(50), allowNull: false
  },
  complemento: {
    type: Sequelize.STRING(50), allowNull: false
  },
  bairro: {
    type: Sequelize.STRING(40), allowNull: false
  },
  cep: {
    type: Sequelize.STRING(15), allowNull: false
  },
  estado: {
    type: Sequelize.STRING(15), allowNull: false
  },
  telefoneResidencial: {
    type: Sequelize.STRING(15), allowNull: true
  },
  celular: {
    type: Sequelize.STRING(15), allowNull: false
  },
  telefoneRecorrente: {
    type: Sequelize.STRING(15), allowNull: true
  },
  telefoneComplementar: {
    type: Sequelize.STRING(15), allowNull: true
  },
  email: {
    type: Sequelize.STRING(20), allowNull: false
  },
  peso: {
    type: Sequelize.DOUBLE, allowNull: false
  },
  altura: {
    type: Sequelize.DOUBLE, allowNull: false
  },
  /*atestadoMedico: { arquivooo
    type: Sequelize.TEXT, allowNull: false
  },*/
  tipoSanguineo: {
    type: Sequelize.STRING(15), allowNull: false
  },
  paMedia: {
    type: Sequelize.STRING(15), allowNull: false
  },
  medicamentosUtilizados: {
    type: Sequelize.STRING(150), allowNull: false
  },
  fraturas: {
    type: Sequelize.STRING(150), allowNull: false
  },
  planoSaude: {
    type: Sequelize.STRING(40), allowNull: false
  },
  nomeContatoEmergencia: {
    type: Sequelize.STRING(50), allowNull: false
  },
  telefoneContatoEmergencia1: {
    type: Sequelize.STRING(15), allowNull: false
  },
  telefoneContatoEmergencia2: {
    type: Sequelize.STRING(15), allowNull: false
  },
  desconto: {
    type: Sequelize.INTEGER, allowNull: false
  },
  ativo:{
    type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true
  },
  situacao:{
    type: Sequelize.INTEGER, allowNull: false, defaultValue: alunoSituacaoEnum.REGULARIZADO
  }

},{
  freezeTableName: true,
  underscored: false
});

  return Aluno;
}