// const wake = () => 'Acordando!!';
// const eat = () => 'Bora toomar café!!'
// const sleep = () => 'Partiu dormir';

// const dothis = (what) => what();

// console.log(dothis(wake));

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multipliesFor2 = (element) => {
//   console.log(`${element} * 2: ${element * 2}`);
// };

// numbers.forEach(multipliesFor2);

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const showEmailList = (email) => {
//   console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
// };

// emailListInData.forEach((item) => showEmailList(item));

// const numbers = [19, 21, 3, 45, 22, 15];

// const findDivisibleBy3And5 = numbers.find((el) => el % 3 === 0 && el % 5 === 0);

// console.log(findDivisibleBy3And5);


// Buscar o PRIMEIRO elemento com o tamanho de 5 caractéres
// const names = ['João', 'Irene', 'Fernando', 'Maria'];
// const array = [];
// for (let i = 0; i < names.length; i +=1 ) {
//   if (names[i].length === 5) {
//     array.push(names[i]);
//   }
// }
// console.log(array[0]);


// const findNameWithFiveLetters = names.find((el) => el.length === 5);

// console.log(findNameWithFiveLetters);

// const musicas = [
//   { id: '31031685', title: 'Partita in C moll BWV 997' },
//   { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
//   { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
// ];

// sconsole.log(findMusic('31031685'));

// const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];
// const peso = ['kg', 'kg', 'und', '5 und'];

// const valor = (products, prices, peso) => products.map((products, idx) => ({[products]: `R$ ${prices[idx]} /${peso[idx]}`}));

// console.log(valor);
// const nova = valor(products,prices,peso);

// console.log(nova);

const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { price } = product

console.log(price);