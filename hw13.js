let arrFructs = ['Apple', 'Banana', 'Pineapple',];

arrFructs.splice(3,1,'Orange','Grapes');
arrFructs.splice(1,1,'Peer');
let deleteFructs = arrFructs.splice(4,1);
console.log(deleteFructs);
arrFructs.splice(0,1,'Watermelon');
console.log(arrFructs);