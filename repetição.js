/*
!==X!=
parseInt,parsefloat
while
for
*/

let entrada =require ('prompt-sync') ();
// let idade = entrada ('digite sua idade:');
// let idadeInt = parseInt(idade);



// if (idade < 18) {
//     console.log('Menor');
    

// }else if (idade == 18) {
//     console.log ('tem 18');
// } else {
//     console.log('Maior');

// }


let num = parseInt (entrada('digite um numero para visualizar tabuada!'))
// let cont = 1;

// while (cont <=10) {
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);
//     cont++;
// }

//tabuada
 for (let cont = 1;cont <=10; cont++){
    let calc = num * cont;
    console.log(`${num} X ${cont} = ${calc}`);
 }   