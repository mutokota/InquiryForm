window.addEventListener("DOMContentLoaded", () => {
  fetch("./form.php")
    .then((response) => response.json()) //返ってきたレスポンスをjsonで受け取って次のthenへ渡す
    .then((res) => {
      //やりたい処理
      let uniquekeydata = document.getElementById("unique_key_input").value;
      uniquekeydata = res;
      return fetch("./form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: uniquekeydata,
      });
    })
    .catch((error) => {
      console.log(error);
    });
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
