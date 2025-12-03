// Dada uma matriz binária nums, retornar o número máximo de 1s consecutivos na matriz.

var findMaxConsecutiveOnes = function(nums) {
    // Variável para armazenar o máximo de consecutivos
    let max = 0;
    // Variável para armazenar o contador atual de consecutivos
    let current = 0;

    // Loop para percorrer array
    for (let num of nums) {
        // Se o número for 1, incrementa o contador atual, caso contrário, reseta para 0
        current = num === 1 ? current + 1 : 0;
        // Atualiza o máximo se o contador atual for maior 
        max = Math.max(max, current); 
    }
    return max;
};

nums = [1,1,0,1,1,1];
console.log(findMaxConsecutiveOnes(nums)); 

nums = [1,0,1,1,0,1];
console.log(findMaxConsecutiveOnes(nums));


