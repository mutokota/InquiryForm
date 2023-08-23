<?php

// // ユニークキー生成
$uniqueKey = uniqid();
session_start();
$uniqueKeyData["keydata"] = $uniqueKey;
$_SESSION = $uniqueKeyData;
echo json_encode($_SESSION["keydata"]);
