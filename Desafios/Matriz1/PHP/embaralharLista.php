<?php

function shuffleArray(array $nums, int $n): array {

    $ans = [];

    // Loop que percorre metade da lista (de 0 até n-1)
    for ($i = 0; $i < $n; $i++) {
        // $arr[] é mais rápido que array_push()
        
        // Adiciona o elemento da primeira metade 
        $ans[] = $nums[$i];
        
        // Adiciona o elemento da segunda metade 
        $ans[] = $nums[$n + $i];
    }

    return $ans;
}

$arr = [2, 5, 1, 3, 4, 7];

echo json_encode(shuffleArray($arr, n: 3));

