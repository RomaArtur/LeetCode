// Dada a matriz nums consistindo de 2n elementos na forma .[x1,x2,...,xn,y1,y2,...,yn].
// Retorne a matriz no formulário .[x1,y1,x2,y2,...,xn,yn].

arr = [2,5,1,3,4,7];

var shuffle = function(nums, n) {
    let ans = [];

    // Loop que percorre metade da lista e adiciona os elementos intercalados 
    for(let i = 0; i < n; i++) {
        // Adiciona o elemento da primeira metade 
        ans.push(nums[i]);
        // Adiciona o elemento da segunda metade
        ans.push(nums[n + i]);
    }
    return ans;
};

console.log(shuffle(arr, 3));
console.log(shuffle(arr, 2));
console.log(shuffle(arr, 1));

 