angular.module('app').constant("apiConstantes", {

    //DEV
    //baseUrlOpenAPI: "http://localhost:3000/oapi",
    baseUrlAPI: "http://localhost:3000/api",

    //PRODUCAO
    //baseUrlOpenAPI: "http://empresa-faeterj-com.umbler.net/oapi",
    //baseUrlAPI: "http://empresa-faeterj-com.umbler.net/api",


    //rotas de unidade
    unidade: "/unidade",
    ativarUnidade: "/ativarunidade",
    
    //rotas de aluno
    aluno: "/aluno",
    
    //rotas de turma
    turma: "/turma",
    ativarTurma: "/ativarturma",

    //rotas de curso
    curso: "/curso"

});