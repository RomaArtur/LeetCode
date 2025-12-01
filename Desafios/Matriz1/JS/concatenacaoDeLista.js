// Dada uma matriz inteira nums de comprimento n, você deseja criar uma matriz ans de comprimento 2n 
// onde ans[i] == nums[i] e ans[i + n] == nums[i] para 0 <= i < n (0-indexado). 
// Especificamente, ans é o concatenação de dois nums matrizes. Retornar a matriz ans.

var getConcatenation = function(nums) {
    // Concat para duplicar a lista 
    const numsConcat = nums.concat(nums);
    // Retorna a nova lista
    return numsConcat;
};

const arr = [1,2,3];

console.log(getConcatenation(arr));

