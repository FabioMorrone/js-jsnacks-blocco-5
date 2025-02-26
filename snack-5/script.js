const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]


const pari = []

for (let i = 0; i < nums.length; i++) {
    const thisNums = nums[i];
    
    if (thisNums % 2 === 0) {
        pari.push(thisNums)
    }
}

console.log(pari);



const pariNumeri = nums.filter((numero)=> {
    return numero % 2 === 0;
})

console.log(pariNumeri);
