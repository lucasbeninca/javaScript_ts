// var é mais antigo, let é mais moderno e recomendado
// const é usado para constantes, ou seja, valores que não mudam
// Tipos de dados primitivos: string, number, boolean, null, undefined, symbol
// Não posso inciar uma variável com um número, mas posso usar aspas para criar uma string
// Não posso usar palavras reservadas como nome de variável, por exemplo: let, var, const, if, else, etc.
// Posso usar letras, números, $ e _ para nomear variáveis
// Nomes de variáveis são case sensitive, ou seja, let nome é diferente de let Nome
// Posso usar acentos, mas é recomendado evitar para manter a compatibilidade com outros sistemas
// Posso usar camelCase, snake_case ou kebab-case para nomear variáveis,
// mas é recomendado usar camelCase para variáveis e snake_case para constantes
// não podemos redeclarar variáveis com o mesmo nome usando let ou const, mas podemos com var
// Posso declarar várias variáveis na mesma linha, mas é recomendado declarar uma por linha para
// manter a legibilidade do código
// Posso usar aspas simples ou duplas para strings, mas é recomendado usar aspas simples para manter a consistência
// Posso usar template literals (crase) para criar strings
// que podem conter variáveis e expressões
let nome = 'Otávio';

console.log(nome,' nasceu em 1984.');
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome,' casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo.');