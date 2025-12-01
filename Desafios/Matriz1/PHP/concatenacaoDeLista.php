<?php
function getConcatenation(array $nums): array {
     // array_merge() para combinar as duas listas.
    return array_merge($nums, $nums);
}

$arr = [1, 2, 3];

echo json_encode(getConcatenation($arr));

