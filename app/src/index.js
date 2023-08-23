function valueCheck(event) {
  const errortext = "必須項目に未入力がありました";
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
    window.location.href = "./index.php";
    event.preventDefault();
  } else {
    return true;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const formbutton = document.getElementById("formbutton");
  formbutton.addEventListener("click", () => {
    fetch("./form.php")
      .then((response) => response.json()) //返ってきたレスポンスをjsonで受け取って次のthenへ渡す
      .then((res) => {
        //やりたい処理
        console.log(res);
        console.log("成功しました");
        valueCheck();
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
