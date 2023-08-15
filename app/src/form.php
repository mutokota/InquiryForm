<?php
// ユニークキーの取得

$uniqueKey = filter_input(INPUT_GET, 'key');
var_dump($uniqueKey);
// ここでユニークキーの検証を行う
if ($uniqueKey === "your_value_here") { // 自分で適切な方法でユニークキーを検証する関数を定義
  $response = array("status" => "success");
} else {
  $response = array("status" => "error", "message" => "Invalid unique key.");
}

echo json_encode($response);
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>form</title>
</head>

<body>
  <p><?= $_POST['name'] ?></p>
  <p><?= $_POST['job'] ?></p>
  <p><?= $_POST['gender'] ?></p>

</body>

</html>