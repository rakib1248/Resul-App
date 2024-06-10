const student_form = document.getElementById("student_form");
const msg = document.getElementById("msg");
const msgTwo = document.getElementById("msg2");
const closer_modal = document.getElementById("closer-modal");
const close_modal = document.getElementById("close_modal");
const all_studenData = document.getElementById("all_studenData");
const studentResult = document.getElementById("student-result");
const student_result_view = document.getElementById("student-result_view");
const close_three_modal = document.getElementById("close_three_modal");

// submit form
student_form.onsubmit = (e) => {
  e.preventDefault();

  const Data = new FormData(e.target);
  const form_Data = Object.fromEntries(Data.entries());

  // form validation

  if (
    !form_Data.name ||
    !form_Data.photo ||
    !form_Data.father ||
    !form_Data.mother ||
    !form_Data.roll ||
    !form_Data.reg ||
    !form_Data.Dob ||
    !form_Data.Examination ||
    !form_Data.institute ||
    !form_Data.Year ||
    !form_Data.board ||
    !form_Data.group
  ) {
    msg.innerHTML = creatAlert("All Feald Are Requred");
    return;
  }

  //   sent LS Data
  let formData = [];
  const oldData = JSON.parse(localStorage.getItem("formDataa"));

  if (oldData) {
    formData = oldData;
  }
  formData.push({
    ...form_Data,
    id: CreatedId(),
    createtAt: Date.now(),
    updatet: null,
    Result: null,
  });
  localStorage.setItem("formDataa", JSON.stringify(formData));

  closer_modal.click();
  e.target.reset();
  ShowStudent();
};

// show student Data

const ShowStudent = () => {
  const studentData = JSON.parse(localStorage.getItem("formDataa"));
  let DataList = "";

  studentData.reverse().map((item, index) => {
    DataList += `
    <tr>
    <td>${index + 1}</td>
    <td>
      <img class='imgsize' src="${item.photo}" alt="Photo of ${item.name}" />
    </td>
    <td>${item.name}</td>
    <td>${item.roll}</td>
    <td>${item.reg}</td>
    <td>${item.board}</td>
    <td> ${timeAgo(item.createtAt)} </td>
    <td>
    ${
      item.Result
        ? '<button class=" btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#Result_view_modal" onclick="updateResult(`' +
          item.id +
          '`)">View Result</button>'
        : '<button class=" btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#Result_modal"  onclick="studentId(`' +
          item.id +
          '`)">Add Result</button>'
    }
    </td>
    <td>
      <button
        class="btn btn-sm btn-info"
        data-bs-toggle="modal"
        data-bs-target="#single-student-create"
        onclick="singleStudentData('${item.id}')"
      >
        <i class="fas fa-eye"></i>
      </button>
      <button class="btn btn-sm btn-warning">
        <i class="fas fa-edit"></i>
      </button>
      <button
        class="btn btn-sm btn-danger"
        onclick="DelateStudentData('${item.id}')"
      >
        <i class="fas fa-trash"></i>
      </button>
    </td>
  </tr>

    `;
  });

  all_studenData.innerHTML = DataList;
};
ShowStudent();

// id submit
const studentId = (id) => {
  studentResult.querySelector('input[name="id"]').value = id;
};

// student Result update
studentResult.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const Data = Object.fromEntries(formData.entries());
  // form validation
  if (
    !Data.bangla ||
    !Data.english ||
    !Data.math ||
    !Data.islamic ||
    !Data.ict ||
    !Data.carer ||
    !Data.physical ||
    !Data.since
  ) {
    msgTwo.innerHTML = creatAlert("All Feald Are Requred");
  }
  // get students Data LS
  const oldData = JSON.parse(localStorage.getItem("formDataa"));
  const UpdateData = oldData.map((item) => {
    if (item.id === Data.id) {
      return {
        ...item,
        Result: {
          bangla: Data.bangla,
          english: Data.english,
          math: Data.math,
          islamic: Data.islamic,
          ict: Data.ict,
          carer: Data.carer,
          physical: Data.physical,
          since: Data.since,
        },
      };
    } else {
      return item;
    }
    // Now update LS Data
  });
  localStorage.setItem("formDataa", JSON.stringify(UpdateData));
  close_modal.click();
  ShowStudent();
  e.target.reset();
};

// update result

const updateResult = (id) => {
  const studentData = JSON.parse(localStorage.getItem("formDataa"));
  const viewResult = studentData.find((item) => item.id == id);

  student_result_view.querySelector('input[name="id"]').value = id;
  student_result_view.querySelector('input[name="bangla"]').value =
    viewResult.Result.bangla;
  student_result_view.querySelector('input[name="english"]').value =
    viewResult.Result.english;
  student_result_view.querySelector('input[name="math"]').value =
    viewResult.Result.math;
  student_result_view.querySelector('input[name="islamic"]').value =
    viewResult.Result.islamic;
  student_result_view.querySelector('input[name="ict"]').value =
    viewResult.Result.ict;
  student_result_view.querySelector('input[name="carer"]').value =
    viewResult.Result.carer;
  student_result_view.querySelector('input[name="physical"]').value =
    viewResult.Result.physical;
  student_result_view.querySelector('input[name="since"]').value =
    viewResult.Result.since;
};

// now update Data form Submit

student_result_view.onsubmit = (e) => {
  e.preventDefault();
  const resultForm = new FormData(e.target);
  const UpdateResultData = Object.fromEntries(resultForm);
  // update LS Data
  const oldData = JSON.parse(localStorage.getItem("formDataa"));
  const UpadateData = oldData.map((item) => {
    if (item.id === UpdateResultData.id) {
      return {
        ...item,
        Result: {
          bangla: UpdateResultData.bangla,
          english: UpdateResultData.english,
          math: UpdateResultData.math,
          islamic: UpdateResultData.islamic,
          ict: UpdateResultData.ict,
          carer: UpdateResultData.carer,
          physical: UpdateResultData.physical,
          since: UpdateResultData.since,
        },
      };
    } else {
      return item;
    }
  });
  localStorage.setItem("formDataa", JSON.stringify(UpadateData));
  close_three_modal.click();
  ShowStudent();
};
