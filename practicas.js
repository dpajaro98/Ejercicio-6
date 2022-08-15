let arreglo=[1,3,4,5,6,7,{id:6},{id:6}]
let conjunto= new Set(arreglo)

console.log({id:6}==={id:6})
//añadir elementos a el conjunto con .add()
// let adicion=conjunto.add("hola")
// console.log(adicion)
//eliminar elementos del conjunto con .delete()
// conjunto.delete(3)
// conjunto.clear(1)

//.has() sirve para saber si existe un elemento dentro del set
// console.log(conjunto.has(23)) is false
//.size() para saber el tamaño del conjunto
// console.log(conjunto.size)
// conjunto.forEach(obj=>{
//     console.log(obj)
// })
const it_conjunto=conjunto.values()
console.log(it_conjunto)

const ar_conjunto=[...conjunto]
console.log(ar_conjunto)

