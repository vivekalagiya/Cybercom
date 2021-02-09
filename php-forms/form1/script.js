const form = document.getElementById('form');
const name = document.getElementById('name');
const password = document.getElementById('password');
const address = document.getElementById('address');
/*
const game = document.getElementById('game');
const gender = document.getElementById('gender');
const age = document.getElementById('age');
const file = document.getElementById('file');
*/



form.addEventListener('submit',(event) => {
    event.preventDefault();
    validate();
    
})

const sendData = (name,sRate,count) => {
        if(sRate === count){
            alert('Regstration successfull.');
            alert('Welcome! Registration successfully..');
        }
}

//for final validation
const SuccessMsg = (name) => {
    let formcon = document.getElementsByClassName('form-control');
    var count=2;
    for(var i=0; i<=2; i++){
        if(formcon[i].className === 'form-control success') {
            var sRate = i;
            console.log(sRate);
            sendData(name,sRate,count); 
        } else {
            return false; 
        }
    }
}


/*
// more email validate
const isEmail = (email) => {
    var atSymbol = email.indexOf('@');
    if (atSymbol < 1) return false;
    var dot = email.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === email.length -1) return false ;
    return true;
}
*/


// define the validate function
const validate = () => {
    const nameval = name.value.trim();
    const passwordval = password.value.trim();
    const addressval = address.value.trim();
    /*
    const game = game.value.trim();
    const gender = gender.value.trim();
    const age = age.value.trim();
    const file = file.value.trim(); 
    */

    // validate name
    if(nameval === ""){
        setErrorMsg(name, 'username cannaot be blank');
    } else if (nameval.length <= 2) {
        setErrorMsg(name, 'username min 3 char');
    } else {
        setSuccessMsg(name);
    }

    // validate password
    if(passwordval === ""){
        setErrorMsg(password, 'password cannaot be blank');
    } else if (passwordval.length <= 7) {
        setErrorMsg(password, 'password min 8 char');
    } else {
        setSuccessMsg(password);
    }

    // validate address
    if(addressval === ""){
        setErrorMsg(address, 'address cannaot be blank');
    } else {
        setSuccessMsg(address);
    }

    /*
    // validate Email
    if(email === ""){
        setErrorMsg(email, 'email cannaot be blank');
    } else if (!isEmail(email)) {
        setErrorMsg(username, 'Not a valid email');
    } else {
        setSuccessMsg(username);
    }  
    */
    SuccessMsg(nameval);
}

function setErrorMsg(input, errormsgs) {
    console.log('there is problem!!');
    const formControl = input.parentElement;
    console.log(formControl);
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = errormsgs; 
    console.log(small.innertext);
}

function setSuccessMsg(input, errormsgs) {
    console.log('there is ok!!');
    const formControl = input.parentElement;
    console.log(formControl);
    formControl.className = 'form-control success';
}