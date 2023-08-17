const data = {
  value: 123456789,
}; // 渡したいデータ

fetch("form.php", {
  // 第1引数に送り先
  method: "POST", // メソッド指定
  headers: { "Content-Type": "application/json" }, // jsonを指定
  body: JSON.stringify(data), // json形式に変換して添付
})
  .then((response) => response.json()) // 返ってきたレスポンスをjsonで受け取って次のthenへ渡す
  .then((res) => {
    console.log(res); // やりたい処理
  })
  .catch((error) => {
    console.log(error); // エラー表示
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
