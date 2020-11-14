// window.addEventListener("load", function () {
//     document.body.classList.remove("preload");
// });

function go(el) {
    // el.classList.toggle('fs-rem-1');
    el.style.transform='rotate(0deg)';
    // el.style.height="90%";
}

function errorCollection() {
    
    var name = document.getElementById('name').value
    var phone = document.getElementById('phone').value
    var msg = document.getElementById('msg').value
    var error = '';
    console.log(error);

    if (name == "") {
        error += 'Please Enter your Name.\n';
    }
    if (phone == "") {
        error += 'Please Confirm your Phone.\n';
    }
    if (msg == "") {
        error += 'Please Confirm your Message.\n';
    }
    if (error != '') {
        alert(error);
        return false;
    }
}


