const formbutton = document.getElementById("formbutton");
const errortext = "入力してください";

//名前入力チェック
function nameCheck() {
  const name = document.getElementById("name");
  if (name.value == "") {
    alert("名前を" + errortext);
  } else {
    return true;
  }
}
//職業入力チェック
function jobCheck() {
  const select = document.querySelector("select[name=job]");
  if (select.value === "空欄") {
    alert("職業を" + errortext);
  } else {
    return true;
  }
}
//言語入力チェック
function languageCheck() {
  const checkBoxList = document.querySelectorAll("input[type='checkbox']");
  let checkedCount = 0;
  for (let i = 0; i < checkBoxList.length; i++) {
    if (checkBoxList[i].checked === true) {
      checkedCount++;
    }
  }
  console.log(checkedCount);
  if (checkedCount === 0) {
    alert("言語を" + errortext);
  } else {
    return true;
  }
}

formbutton.addEventListener("click", (event) => {
  event.preventDefault();
  //nameCheck();
  //jobCheck();
  languageCheck();
});
