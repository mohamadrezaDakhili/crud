let test = null;


$(document).ready(function () {
    $('#btn-modal').click(function () {
        $('#myModal').modal('show')
    });
});

let arr = {
    status: 200,
    data: [
        {
            id: "1",
            name: "mohamadreza Dakhili",
            email: "mohamadrezadakhili53@gmail.com",
            phone: "09384010471"
        }
    ]
}

$('#btn-create-account').click(function (e) {
    e.preventDefault();
    let name = $("#username").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let id = $("#id").val();

    checkLength($("#username"), 6);
    isEmail($("#email"));
    isPhone($("#phone"));

    read(id, name, email, phone);
    resetForm();
    
    if(test == null){
        create();
    }else{
        update(arr);
    }


    $('#myModal').modal('hide')
});


function read(id, name, email, phone) {
    arr.data.push({
        id,
        name,
        email,
        phone
    })
}
function create() {
    for (var i = 0; i < arr.data.length; i++) {
        let obj = arr.data[i]
        let tr = "<tr><td>" + obj.id + "</td><td>" + obj.name + "</td><td>" + obj.email + "</td><td>" + obj.phone + "</td><td><button onclick='onEdit(this)'>Edit</button></td></tr>"
        $("#table > tbody:last-child").append(tr);
    }
}
function resetForm() {
    $("#username").val("");
    $("#email").val("");
    $("#phone").val("");
    $("#id").val("");
    test = null;
}
function onEdit(td) {
    $('#myModal').modal('show')
    test = $(td).parent().parent()
    $("#username").val(test.children().eq(1).text());
    $("#email").val(test.children().eq(2).text());
    $("#phone").val(test.children().eq(3).text());
    $("#id").val(test.children().eq(0).text());
    console.log(test);
    
}

function update(arr) {
    test.children().eq(1).text() = arr.data.name;
    test.children().eq(2).text() = arr.data.email;
    test.children().eq(3).text() = arr.data.phone;
    test.children().eq(0).text() = arr.data.id;

}



function checkLength(input, min) {
    if (input.val().length < min) {
        showError(input, "Must be more than 6 words")
    } else {
        showSuccess(input)
    }
}
function isEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.val().trim())) {
        showSuccess(input)
    } else {
        showError(input, "Email is not valid")
    }
}
function isPhone(input) {
    let character = input.val().substr(0, 2);
    if (character !== "09" || input.val().length < 11) {
        showError(input, "Phone is not valid")
    } else {
        showSuccess(input)
    }
}
function showError(input, message) {
    input.css("border-color", "red")
    const formControl = input.parent();
    if (input.val() == "") {
        if (formControl.children("span")) {
            formControl.remove("span")
        } else {
            message = "is Empty"
            $(formControl).append($('<span class="errorText">' + message + '</span>'))
        }
    } else {
        formControl.remove("<span>");
        $(formControl).append($('<span class="errorText">' + message + '</span>'))

    }
}
function showSuccess(input) {
    input.css("border-color", "green")
}