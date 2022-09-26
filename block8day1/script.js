// Número 1
// const isEven = (number) => number % 2 === 0 ? `${number} é par` : `${number} é impar`



// Número 2
// array = [2, 3, 4, 5, 6, 8, 10, 11]

// const isEven = (array) => {
//   let soma = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] %2 === 0) {
//       soma += array[i];
//     }
//   }
//   return soma;
// }


// Número 3

// const tipo = (el) => typeof el === 'number' ? `O ${el} é um número` : `Errrooou!`;

// Número 4
// const hello = (userName) => typeof(userName) !== '' && `Boas vindas, ${userName}`;


// Número 5

// const gravVel = (t) =>  t * 9.8;

// Número 6
// const isZero = (number) => number === 0 ? 'Zero' : 'Not Zero';

// console.log(isZero(0));

// Número 7

// const allEqual = (array) => {
// if (!Array.isArray(array) || array.lenght <= 1) {
// return 'Parâmetro inválido';
// }
// for (let value of array) {
// if (value !== array[0]) {
// return false;
// }
// }
// return true;
// }

// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }
// const initialSum = sumFixAmount(10) 
// Lê-se como >> initialSum = (number) => 15 + number; || esse 15 é o retorno inicial de amount, falado pela sumFixAmount;
// Logo, quando
// console.log(Error);
// sumFixAmount(5) me chama (number) => 5 + number
// Seria como se estivesse o seguinte retorno

// const dinheiroDoAmigo = (valor) => {
//   return (extra) => valor + extra;
// };
// const dinheiroDoHaroldo = dinheiroDoAmigo(2);

// const dinheiroEmprestadoParaMim = dinheiroDoHaroldo(2);

// console.log(dinheiroEmprestadoParaMim);

// function dinheiroDoAmigo (valorEmprestado) {
//   return valorEmprestado;
// }

// function dinheiroDoHaroldo (dinheiroDele) {
//   return dinheiroDele + dinheiroDoAmigo(2);
// }

// function meEmpresta (valor) {
//   return dinheiroDoHaroldo(valor);
// }

// console.log(meEmpresta(2));

// const gerarEmail = (nome) => nome.replace(' ', '.').toLowerCase().concat('', '@trybe.com');

// const arroz = (nome) => `${nome.replace(' ', '.').toLowerCase()}@trybe.com`;

// console.log(gerarEmail('Caique Coelho'));
// console.log(arroz('Caique Coelho'));

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
// // (index2.author.birthYear === index.author.birthYear) &&
// // (index2.author.name !== index.author.name)));
// function authorUnique() {
//   const batatinha = books.every((index) => !books.some((index2) =>
//   (index2.author.birthYear === index.author.birthYear) &&
//   (index2.author.name !== index.author.name)
// ));

//   return batatinha;
// }


function authorBornIn1947() {
  const arroz = books.find((element) => element.author.birthYear === 1947);
  return arroz.author.name
}
// console.log(authorBornIn1947());

function smallerName() {
  let nameBook = books[0].name;
  // escreva aqui o seu código
  // Retorne o nome do livro de menor nome.
  books.forEach((element) => {
    // console.log(element.name)
    if (element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}
// console.log(smallerName());

const array = [1, 2, 3, 4, 5, 6, 7];

const sum = () => {
  let agua = 0;
  array.forEach(element => agua += element);
  return agua;
}
// let tropaDeElite = books[0].name;

// for (let i = 0; i < books.length; i += 1) {
//   if (books[i].name.length < tropaDeElite.length) {
//     tropaDeElite = books[i].name;
//   }
// }
// console.log(tropaDeElite);
// Encontre o primeiro livro cujo nome possui 26 caracteres.

const getNamedBook = (quindim) => quindim.find((element) => element.name.length === 26);

function booksOrderedByReleaseYearDesc() {
  const medico = books.sort((a, b) => b.releaseYear - a.releaseYear);
  // console.log();
  return medico;
}
// console.log(booksOrderedByReleaseYearDesc());
// console.log(getNamedBook(books));
function everyoneWasBornOnSecXX() {
  const velhotes = books.every((num) => num.author.birthYear >= 1901);
  return velhotes;
}
function someBookWasReleaseOnThe80s() {
  const velharia = books.some((num) => num.releaseYear >= 1980 && num.releaseYear <= 1989);
  return velharia;
}

function authorUnique() {
  const a = books.every((b) => (b.author.birthYear === books.forEach((c) => c.author.birthYear)) &&
    (b.author.name !== books.forEach((c) => c.author.name)));
  return a;
}



// console.log(authorUnique());


const oddOrEven = (array) => {
  let sum = 0;
  if (array === null) {
    array = [0];
    return 'even';
  }

  return sum % 2 === 0 ? 'even' : 'odd';
}

// console.log(oddOrEven([1]));

function reverseWords(str) { // estudar mais osbre esse caso
  let arr = str.split(' ').map((word) => word.split('').reverse().join(''));
  return arr.join(' ');

}

function nbYear(p0, percent, aug, p) {
  let yearStart = (p0 + (p0 * (percent / 100))) + aug;
  if (yearStart > p) return 1;
  let time = 1;
  for (let count = 0; count < p; count += 1) {
    let year = Math.floor(yearStart + (yearStart * percent / 100) + aug);
    if (year < p) {
      yearStart = year;
      time++;
    }
  } return time + 1;
}
// function nbYear(p0, percent, aug, p) { for (var years = 0; p0 < p; years++) { p0 = Math.floor(p0 + p0 * percent / 100 + aug);} return years } melhor jeito e mais organizado.
// console.log(nbYear(1500000, 2.5, 10000, 2000000));

const findAverage = (arr) => !arr.length ? 0 : arr.reduce((a, b) => (a + b)) / arr.length;

// console.log(findAverage([1,2,3]));

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// console.log(`(${array.slice(0,3).join('')}) ${array.slice(3,6).join('')}-${array.slice(6,10).join('')}`);

// function createPhoneNumber(numbers){ o melhor formato que eu já vi
//   var format = "(xxx) xxx-xxxx";

//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }

// numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3'); >>>>>>> gênio no Regex

// function descendingOrder(n){
//   if (String(n).length > 1) {
//   let array = Array.from(String(n));
//   array.sort((a, b) => b-a)

//   return parseInt(array.join(''));
//   }
//   return n;
//} // parseInt(String(n).split('').sort().reverse().join('')) <><> Esta é a mlehor prática?

// MINHA FUNÇÃO
// function productFib(prod) {
//   let arr = [0,1];
//   for (let i = 2; i < prod; i += 1) {
//     arr.push((arr[i - 1]) + arr[i - 2]);
//     if ((arr[i-1] * arr[i - 2]) === prod) {
//       return [arr[i-2], arr[i-1], true]
//     }
//     if ((arr[i-1] * arr[i - 2]) > prod) {
//       return [arr[i-2], arr[i-1], false]
//     }
//   }
// }

// function productFib(prod){
//   var n = 0;
//   var nPlus = 1;  
//   while(n*nPlus < prod) {
//     nPlus = n + nPlus;
//     n = nPlus - n;
//   }
//   return [n, nPlus, n*nPlus===prod];
// }
// AS DUAS MELHORES FUNÇÕES
// function productFib(prod){
//   let [a, b] = [0, 1];
//   while(a * b < prod) [a, b] = [b, a + b];
//   return [a, b, a * b === prod];
// }

// console.log(productFib(815))

// MINHA SOLUÇÃO
// const getSum = (a, b) => {
//   let c = 0
//   if (a < b) {
//     while (a <= b) {
//       c += a;
//       a = a + 1;
//     }
//     return c;
//   }
//   if (b <= a) {
//     while (b <= a) {
//       c += b;
//       b = b + 1;
//     }
//     return c;
//   }
// }

// Melhor Solução >>> Perfeita >>> max-min + 1  é para descobrir o número N de termos >> depois, min + max (a1 + an) * N / 2
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//       max = Math.max(a, b);
//   return (max - min + 1) * (min + max) / 2;
// }

console.log(getSum(2, -1));