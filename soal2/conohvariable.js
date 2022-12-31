// global scope 
let nama = 'Jack'

function tampilkannama(){
    console.log(nama);
}
tampilkannama();
console.log(nama);

//Local Scope
function ubahnama(){
    let nama = 'Rules'
    console.log(nama);
}
ubahnama();
console.log(nama);

//Reassigned
let name = 'Bro'
console.log(name);

name = 'Joy'
console.log(name);

//Redclared
let Nom = 'Hi'
console.log(Nom);

//let Nom = 'Jul'

// Hoisting 
console.log(lord);
let lord = 'Ber'



