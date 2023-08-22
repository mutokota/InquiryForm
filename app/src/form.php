<?php

// // ユニークキー生成
$uniqueKey = uniqid();
session_start();
$uniqueKeyData["keydata"] = $uniqueKey;
$_SESSION = $uniqueKeyData;
echo json_encode($_SESSION);


if ($_REQUEST["unique_key"]) {
  # code...
  var_dump("ok");
} else {
  var_dump("no");
}
