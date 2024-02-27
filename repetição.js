/*
!==X!=
parseInt,parsefloat
while
for
*/

// let entrada =require ('prompt-sync') ();
// let idade = entrada ('digite sua idade:');
// let idadeInt = parseInt(idade);



// if (idade < 18) {
//     console.log('Menor');
    

// }else if (idade == 18) {
//     console.log ('tem 18');
// } else {
//     console.log('Maior');

// }


// let num = parseInt (entrada('digite um numero para visualizar tabuada!'))
// let cont = 1;

// while (cont <=10) {
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);
//     cont++;
// }

//tabuada
//  for (let cont = 0;cont <=3; cont++){
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);
// }

//  const senha = '123456';
// let cont = 0;
// do {
//    if (cont ===3){
//       break;
//    }
//    cont++;
//    var senhaDig = entrada ('Digite a senha para acessar o sistema');

// } while (senhaDig !== senha);

// if (cont > 3){
// console.log ('Acesso não autorizado');
// }else{
//    console.log('Acesso autorizado');
// }

// entrada();

// let sn = '123456';
// let snDg = entrada ('Digite a senha para acessar o sitema:');

// while (sn !== snDg) {
//    snDg = entrada ('Digite a senha para acessar o sistema:');
// }

//  for (let cont = 1;cont >=3; cont++){
//     let calc = num * cont;
//     console.log(`${num} X ${cont} = ${calc}`);

let entrada =require ('prompt-sync') ();
let senha ='123456';
let snCorreta = false;
for (let index = 1; index <= 3; index++){
   const snDg = entrada ('Digite a senha')
   if (senha ===snDg) {
      snCorreta = true;
      break;
   }
}

console.log (snCorreta ? 'Acesso autorizado' : 'Acesso negado');

entrada ();





 

// if (cont > 3){
// console.log ('Acesso não autorizado');
// }else{
//    console.log('Acesso autorizado');
// }

// entrada();