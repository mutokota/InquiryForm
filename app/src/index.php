<?php

?>


<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>お問合せフォーム</title>
</head>

<body>
  <form id="form" action="" method="post">
    <ul>
      <li> <label for="name">名前</label>
        <input id="name" type="text" name="name">
      </li>
      <li> <label for="job">職業</label>
        <select id="job" name="job">
          <option value="空欄"></option>
          <option value="会社員">会社員</option>
          <option value="専業主婦">専業主婦</option>
          <option value="フリーター">フリーター</option>
        </select>
      </li>
      <li> <label for="gender">性別</label>
        <input type="radio" value="男性" name="gender" checked>男性
        <input type="radio" value="女性" name="gender">女性
      </li>
      <li>
        <span>好きな言語</span>
        <div>
          <input class="language" type="checkbox" name="Javascript">
          <label>Javascript</label>
          <input class="language" type="checkbox" name="PHP">
          <label>PHP</label>
          <input class="language" type="checkbox" name="Ruby">
          <label>Ruby</label>
        </div>
      </li>
      <li>
        <input id="file" type="file" name="file" accept="image/png, image/jpeg, application/pdf">
      </li>
    </ul>
    </li>
    <button id="formbutton">送信</button>
  </form>
  <script src="./index.js"></script>
</body>

</html>