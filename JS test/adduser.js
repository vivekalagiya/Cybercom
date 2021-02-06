function logout() {
    sessionStorage.clear();
    window.location.href = "Login.html";
}


var arrUser = [];
var flag = 0;

function addUser() {

    var fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    var dob = document.getElementById('birthdate').value;


    var user = {
        name: fname,
        email: email,
        password: pwd,
        birthdate: dob
    };

    
    if (localStorage.getItem('arrUser')) {
        arrUser = JSON.parse(localStorage.getItem('arrUser'));
        console.log(arrUser);
    }

    function user_exist() {
        for (var i = 0; i < arrUser.length; ++i) {

            var temp = arrUser[i];

            if (temp.name == name) {
                flag = 1;
                alert("user exist");
                break;
            }
        }
    }
    user_exist();
    if (flag === 0) {
        arrUser.push(admin);
        console.log(arrUser);
        localStorage.setItem("arrUser", JSON.stringify(arrUser));
        var message = window.confirm("user added");
        
    }

};



