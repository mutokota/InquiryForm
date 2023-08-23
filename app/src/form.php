<?php

// // ユニークキー生成
// $uniqueKey = uniqid();
// session_start();
// $uniqueKeyData["keydata"] = $uniqueKey;
// $_SESSION = $uniqueKeyData;
// echo json_encode($_SESSION);

// session_start();
// $unique_key = $_SESSION["keydata"];
// var_dump($_SESSION);

// if ($_REQUEST["unique_key"]) {
//   # code...
//   var_dump("ok");
// } else {
//   var_dump("no");
// }


$uniqueKey = uniqid();
session_start();
$uniqueKeyData["keydata"] = $uniqueKey;
$_SESSION = $uniqueKeyData;
echo json_encode($_SESSION);
