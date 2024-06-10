const pzlshow = document.getElementById("pzlshow");
const search_result = document.getElementById("search_result");

let pzl1 = getRandomNumber();
let pzl2 = getRandomNumber();
localStorage.setItem("edu_pzl", JSON.stringify({ a: pzl1, b: pzl2 }));
const pzlrandom = JSON.parse(localStorage.getItem("edu_pzl"));
pzlshow.innerHTML = `${pzlrandom.a} + ${pzlrandom.b}`;

search_result.onsubmit = (e) => {
  e.preventDefault();
  const saerchData = new FormData(e.target);
  const search_form = Object.fromEntries(saerchData);
  const pazzlee = JSON.parse(localStorage.getItem("edu_pzl"));

  //   form Validation and sent Data LS
  if (
    !search_form.examination ||
    !search_form.roll ||
    !search_form.Year ||
    !search_form.board ||
    !search_form.reg
  ) {
    alert("All Feald is Requred");
  } else {
    localStorage.setItem("search_result", JSON.stringify(search_form));
  }

  const Form_result_Data = JSON.parse(localStorage.getItem("formDataa"));
  const search_result_Data = JSON.parse(localStorage.getItem("search_result"));
  //   pzzle chack
  if (pazzlee.a + pazzlee.b !== parseInt(search_form.pzzle)) {
    alert("pazzel is not match");
    return;
  } else {
    const searchResult = Form_result_Data.find(
      (item) =>
        item.reg === search_result_Data.reg &&
        item.roll === search_result_Data.roll &&
        item.Examination === search_result_Data.examination &&
        item.board === search_result_Data.board &&
        item.Year === search_result_Data.Year
    );
    if (searchResult) {
      localStorage.setItem("searcgData", JSON.stringify(searchResult));
      window.location.href = "result.html";
    } else {
      alert("No Result Found");
    }
  }

  //   result chack
};
