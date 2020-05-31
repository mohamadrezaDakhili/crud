$(document).ready(function () {
    $('#btn-modal').click(function () {
        $('#myModal').modal('show')
    });
});

$('#btn-create-account').click(function (e) { 
    e.preventDefault();
    let name = $("#username").val();
    let email = $("#email").val();
    let phone = $("#phone").val();
    let id = $("#id").val();
    let arrUser = [{
        id, name, email, phone
    }];
    console.log(arrUser);
    $('#myModal').modal('hide')

    let test = "<tr><td>" + id + "</td><td>" + name + "</td><td>" + email + "</td><td>" + phone + "</td></tr>"
    let tr = $("#table > tbody:last-child").append(test);
});


// $('#myModal').on('hide.bs.modal', function (e) {
    
// });

function createItemTable() {

}