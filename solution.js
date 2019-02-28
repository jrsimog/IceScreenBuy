
const N = [1,4,5,3,2]; // Valor que corresponde a los helados a comprar
const m = 4; // pesos en el bolsillo
const getItemsToBuy = (items, buget) => {
    // sacamos el primer elemento 
    const firstItem = items[0];
    // cacheamos para comparar
    const cache = {
      [firstItem]: 0
    }
    const result = [];
    for(let i = 1; i < items.length; i++){
      const current = items[i];
      const rest = buget - current;
      if(rest > 0){
        if(cache.hasOwnProperty(rest)){
           // encontramos los dos
           result.push(cache[rest], i);
           break;
        }
        cache[current] = i;
      }
    }
    return result;
}
console.log(getItemsToBuy(N, m));