// ① ユニークキーを発行
const uniqueKey = "your_value_here"; // 自分で適切な方法でユニークキーを生成する関数を定義

// ② PHPにユニークキーを送信
fetch('form.php', {
  method: 'POST',
  body: JSON.stringify({ key: uniqueKey }),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  if (data.status === "valid") {
    console.log("Unique key is valid.");
    // ユニークキーが有効な場合の処理
  } else {
    console.error("Unique key is not valid.");
    // ユニークキーが無効な場合の処理
  }
});

const formbutton = document.getElementById("formbutton");
const errortext = "必須項目に未入力がありました";

formbutton.addEventListener("click", (event) => {
  const name = document.getElementById("name");
  const select = document.querySelector("select[name=job]");
  const checkBoxList = document.querySelectorAll("input[type='checkbox']");
  const file = document.getElementById("file");
  let flag = 0;

  let checkedCount = 0;
  for (let i = 0; i < checkBoxList.length; i++) {
    if (checkBoxList[i].checked === true) {
      checkedCount++;
    }
  }

  if (name.value === "") {
    flag = 1;
  } else if (select.value === "空欄") {
    flag = 1;
  } else if (checkedCount === 0) {
    flag = 1;
  } else if (file.value === "") {
    flag = 1;
  }

  if (flag) {
    alert(errortext);
    event.preventDefault();
  } else {
    return true;
  }
});
