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
  <form action="">
    <ul>
      <li> <label for="name">名前</label>
        <input type="text" name="name">
      </li>
      <li> <label for="job">職業</label>
        <select name="job">
          <option value="会社員">会社員</option>
          <option value="専業主婦">専業主婦</option>
          <option value="フリーター">フリーター</option>
        </select>
      </li>
      <li> <label for="gender">性別</label>
        <input type="radio" value="男性" name="gender">男性
        <input type="radio" value="女性" name="gender">女性
      </li>
      <li>
        <span>好きな言語</span>
        <input type="checkbox" name="Javascript">
        <label for="javascript">Javascript</label>
        <input type="checkbox" name="PHP">
        <label for="php">PHP</label>
        <input type="checkbox" name="Ruby">
        <label for="php">Ruby</label>
      </li>
      <li>
        <input type="file" name="file" accept="image/png, image/jpeg, application/pdf">
      </li>
    </ul>
  </form>
</body>

</html>