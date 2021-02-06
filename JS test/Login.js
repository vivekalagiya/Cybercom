var arrAdmin = [];
var flag = 0;
var temp;



function isValid() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (localStorage.getItem('arrAdmin')) {
        arrAdmin = JSON.parse(localStorage.getItem('arrAdmin'));
    }

    function user_exit() {
        for (var i = 0; i < arrAdmin.length; i++) {

            temp = arrAdmin[i];

            if (arrAdmin[i].email == email && arrAdmin[i].password == password) {
                flag = 1;

                break;

            }
        }
    }
    user_exit();

    if (flag == 0) {
        alert("Invalid email and password!");
    }
    else {
        sessionStorage.setItem("name", temp.name);
        window.location.href = "dashboard.html";
    }
};