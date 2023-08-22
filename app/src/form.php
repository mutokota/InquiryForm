<?php

// // ユニークキー生成
$uniqueKey = uniqid();
$_SESSION["data"] =
  json_encode($uniqueKey);

