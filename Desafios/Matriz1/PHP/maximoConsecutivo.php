<?php

    function findMaxConsecutiveOnes($nums) {
        $max = 0;
        $current = 0; 

        // Utilizei a mesmma lógica do JS, adaptando para PHP
        foreach ($nums as $num) {
            $current = $num === 1 ? $current + 1 : 0;
            $max = max($max, $current); 
        }
        return $max;
    }

    $nums = [1, 1, 0, 1, 1, 1]; 

    echo findMaxConsecutiveOnes($nums) . "\n";

    $nums = [1, 0, 1, 1, 0, 1];

    echo findMaxConsecutiveOnes($nums) . "\n"; 
