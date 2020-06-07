var tdUser = null;
let idEdit = "";
$(document).ready(function () {
  $("#btn-modal").click(function () {
    $("#myModal").modal("show");
  });
});

let arr = [];

$("#btn-create-account").click(function (e) {
  e.preventDefault();
  let name = $("#username").val();
  let email = $("#email").val();
  let phone = $("#phone").val();
  let id = Date.now();

  checkLength($("#username"), 6);
  isEmail($("#email"));
  isPhone($("#phone"));

  read(id, name, email, phone);
  console.log(tdUser, "tdUser");

  if (tdUser == null) {
    create(id, name, email, phone);
  } else {
    update(id, name, email, phone);
  }

  $("#myModal").modal("hide");
  resetForm();
});

function read(id, name, email, phone) {
  arr.push({
    id,
    name,
    email,
    phone,
  });
}
function create(id, name, email, phone) {
  let tr =
    "<tr><td>" +
    id +
    "</td><td>" +
    name +
    "</td><td>" +
    email +
    "</td><td>" +
    phone +
    "</td><td><button onclick='onEdit(this)'>Edit</button></td></tr>";
  $("#table > tbody:last-child").append(tr);
}
function resetForm() {
  $("#username").val("").css("border-color", "rgb(206, 212, 218)");
  $("#email").val("").css("border-color", "rgb(206, 212, 218)");
  $("#phone").val("").css("border-color", "rgb(206, 212, 218)");
  $("#id").val("").css("border-color", "rgb(206, 212, 218)");
  tdUser = null;
}
function onEdit(td) {
  $("#myModal").modal("show");
  tdUser = $(td).parent().parent();

  $("#username").val(tdUser.children().eq(1).text());
  $("#email").val(tdUser.children().eq(2).text());
  $("#phone").val(tdUser.children().eq(3).text());
  $("#id").val(tdUser.children().eq(0).text());
  idEdit = tdUser.children().eq(0).text();
  tdUser = true;
}

function update(id, name, email, phone) {
  var item = arr.find((i) => i.id == id);
  console.log(item);

  item.name = name;
  item.email = email;
  item.phone = phone;
}

function checkLength(input, min) {
  if (input.val().length < min) {
    showError(input, "Must be more than 6 words");
  } else {
    showSuccess(input);
  }
}
function isEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.val().trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
function isPhone(input) {
  let character = input.val().substr(0, 2);
  if (character !== "09" || input.val().length < 11) {
    showError(input, "Phone is not valid");
  } else {
    showSuccess(input);
  }
}
function showError(input, message) {
  input.css("border-color", "red");
  const formControl = input.parent();
  if (input.val() == "") {
    if (formControl.children("span")) {
      formControl.remove("span");
    } else {
      message = "is Empty";
      $(formControl).append(
        $('<span class="errorText">' + message + "</span>")
      );
    }
  } else {
    formControl.remove("<span>");
    $(formControl).append($('<span class="errorText">' + message + "</span>"));
  }
}
function showSuccess(input) {
  input.css("border-color", "green");
}
