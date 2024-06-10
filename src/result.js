const edu_content = document.getElementById("edu_content");

const resultData = JSON.parse(localStorage.getItem("searcgData"));
if (!resultData) {
  window.location.href = "index.html";
}

edu_content.innerHTML = `
<div class="student-result-shit">
              <h3 class="text-center fs-5 pt-2">
                SSC/Dakhil/Equivalent Result 2020
              </h3>
              <div class="text-end pb-2 studentImg">
                <img
                  class="img-circle img-thumbnail img-responsive img-fluid"
                  src="${resultData.photo}"
                  alt="Photo of ${resultData.name}"
                />
              </div>
              <table class="table table-striped table-bordered table-hover">
                <tr>
                  <td>Roll no</td>
                  <td>${resultData.roll}</td>
                  <td>Name</td>
                  <td>${resultData.name}</td>
                </tr>
                <tr>
                  <td>Board</td>
                  <td>${resultData.board}</td>
                  <td>Father's Name</td>
                  <td>${resultData.father}</td>
                </tr>
                <tr>
                  <td>Group</td>
                  <td>${resultData.group}</td>
                  <td>Mother's Name</td>
                  <td>${resultData.mother}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>Regular</td>
                  <td>Date of Birth</td>
                  <td>${resultData.Dob}</td>
                </tr>
                <tr>
                  <td>Grade</td>
                  <td>${
                    resultSystemPro({
                      bangla: resultData.Result.bangla,
                      english: resultData.Result.english,
                      math: resultData.Result.math,
                      islamic: resultData.Result.ict,
                      ict: resultData.Result.ict,
                      carer: resultData.Result.carer,
                      pychical: resultData.Result.physical,
                      since: resultData.Result.since,
                    }).grade
                  }</td>
                  <td>Institute</td>
                  <td>${resultData.institute}</td>
                </tr>
                <tr>
                  <td>GPA</td>
                  <td>${
                    resultSystemPro({
                      bangla: resultData.Result.bangla,
                      english: resultData.Result.english,
                      math: resultData.Result.math,
                      islamic: resultData.Result.islamic,
                      ict: resultData.Result.ict,
                      carer: resultData.Result.carer,
                      pychical: resultData.Result.physical,
                      since: resultData.Result.since,
                    }).gpa
                  }</td>
                </tr>
              </table>
              <div class="Grade_Sheet">
                <h5 class="text-center">Grade Sheet</h5>
                <table class="table table-striped table-bordered table-hover">
                  <thead>
                    <tr class="table-light">
                      <th>Code</th>
                      <th>Subjact</th>
                      <th>Grade</th>
                      <th>GPA</th>
                      <th>Mark</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>101</td>
                      <td>Bangla</td>
                      <td>${getGradeAndGPA(resultData.Result.bangla).grade}</td>
                      <td>${getGradeAndGPA(resultData.Result.bangla).gpa}</td>
                      <td>${resultData.Result.bangla}</td>
                    </tr>
                    <tr>
                    <td>102</td>
                    <td>Eiglish</td>
                    <td>${getGradeAndGPA(resultData.Result.english).grade}</td>
                    <td>${getGradeAndGPA(resultData.Result.english).gpa}</td>
                    <td>${resultData.Result.english}</td>
                    </tr>
                    <tr>
                      <td>103</td>
                      <td>MATHEMATICS</td>
                      <td>${getGradeAndGPA(resultData.Result.math).grade}</td>
                      <td>${getGradeAndGPA(resultData.Result.math).gpa}</td>
                      <td>${resultData.Result.math}</td>
                    </tr>
                    <tr>
                      <td>104</td>
                      <td>Islamic History</td>
                      <td>${
                        getGradeAndGPA(resultData.Result.islamic).grade
                      }</td>
                      <td>${getGradeAndGPA(resultData.Result.islamic).gpa}</td>
                      <td>${resultData.Result.islamic}</td>
                    </tr>
                    <tr>
                    <td>105</td>
                      <td>I.C.T</td>
                      <td>${getGradeAndGPA(resultData.Result.ict).grade}</td>
                      <td>${getGradeAndGPA(resultData.Result.ict).gpa}</td>
                      <td>${resultData.Result.ict}</td>
                    </tr>
                    <tr>
                      <td>106</td>
                      <td>CAREER EDUCATION</td>
                      <td>${getGradeAndGPA(resultData.Result.carer).grade}</td>
                      <td>${getGradeAndGPA(resultData.Result.carer).gpa}</td>
                      <td>${resultData.Result.carer}</td>
                    </tr>
                    <tr>
                    <td>107</td>
                    <td>PHYSICAL EDUCATION</td>
                    <td>${getGradeAndGPA(resultData.Result.physical).grade}</td>
                    <td>${getGradeAndGPA(resultData.Result.physical).gpa}</td>
                    <td>${resultData.Result.physical}</td>
                    </tr>
                    <tr>
                    <td>108</td>
                    <td>SOCIAL SCIENCE</td>
                    <td>${getGradeAndGPA(resultData.Result.since).grade}</td>
                    <td>${getGradeAndGPA(resultData.Result.since).gpa}</td>
                    <td>${resultData.Result.since}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
`;

const diletresult = () => {
  localStorage.removeItem("searcgData");
};
