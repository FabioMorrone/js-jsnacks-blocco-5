const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

const numbersPiu = []

for (let i = 0; i < numbers.length; i++) {
  const thisNumber = numbers[i];
  numbersPiu.push(thisNumber + 1)

}

console.log(numbersPiu);
