const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

for (let i = 0; i < names.length; i++) {
    const thisName = names[i];
    
    console.log(thisName);
    
}

names.forEach((name)=>{
    console.log(name);
    
})
