function addUser() {
    alert("test");
    var fname = document.getElementById('name');
    var email = document.getElementById('email');
    var pwd = document.getElementById('password');
    var dob = document.getElementById('birthDate');

    var admin = {
        name: fname,
        email: email,
        password: pwd,
        birthDate: dob
    };

    if (localStorage.setItem('admin')) {
        admin = JSON.parse(localStorage.getItem('admin'));
        console.log(admin);
    }

}

document.write('<table id="table" border="1" class="table table-data2" id="table-user">');
document.write('<thread>');

document.write('<th>Name</th>');
document.write('<th>Email</th>');
document.write('<th>Password</th>');
document.write('<th>Birthdate</th>');
document.write('<th>Age</th>');
document.write('<th colspan="2">Actions</th>');

document.write('</thread>');
document.write('<tbody>');
document.write('<tr>');
