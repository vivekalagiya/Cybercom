

var arrAdmin = [];
var flag = 0;

function addElement() {

    console.log('check');
    var fname = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;
    var cpwd = document.getElementById('cpassword').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;


    var admin = {
        name: fname,
        email: email,
        password: pwd,
        city: city,
        state: state
    };

    if (localStorage.getItem('arrAdmin')) {
        arrAdmin = JSON.parse(localStorage.getItem('arrAdmin'));
        console.log(arrAdmin);
    }

    function admin_exist() {
        for (var i = 0; i < arrAdmin.length; ++i) {

            var temp = arrAdmin[i];

            if (temp.email == email) {
                flag = 1;
                alert("admin already exist!");
                break;
            }
        }
    }
    admin_exist();
    if (flag === 0) {
        arrAdmin.push(admin);
        console.log(arrAdmin);
        localStorage.setItem("arrAdmin", JSON.stringify(arrAdmin));
        var message = window.confirm("registerd successfully");
        if (message) {
            window.location.href = "Login.html";
        }
    }

};

