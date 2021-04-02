function validate() {
    let userName = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confPass = $('#confirm-password');
    let submitBtn = $('#submit');
    let company = $('#company');
    let companyNumber = $('#companyNumber');
    let UN = false;
    let EM = false;
    let  P = false;
    let CP = false;
    let CN = true;

    submitBtn.on('click', function (ev) {
        ev.preventDefault();
    });

    let uNameRegex = /^[A-Za-z0-9]{3,20}$/gm;
    submitBtn.on('click', function () {
        if (!uNameRegex.test(userName.val().trim())) {
            userName.css('border-color', 'red')
        }
        else{userName.css("border",""); UN=true;}
    });

    let eMailRegex = /^(.)*@(.)*\.(.)*$/gm;
    submitBtn.on('click', function () {
        if (!eMailRegex.test(email.val().trim())) {
                email.css('border-color', 'red')
            }
            else{email.css("border",""); EM=true}
        });

    let passRegex = /^[\w]{5,15}$/gm;
    submitBtn.on('click', function () {
        if (!passRegex.test(password.val().trim())) {
            password.css('border-color', 'red')
        }
        else{password.css("border",""); P = true}
    });

    let confPassRegex = /^[\w]{5,15}$/gm;
    submitBtn.on('click', function () {
        if (!confPassRegex.test(confPass.val().trim()) || password.val() !== confPass.val()) {
            confPass.css('border-color', 'red');
            password.css('border-color', 'red');
        }
        else{confPass.css("border",""); CP = true}
    });

    company.on('change',function () {
        CN = false;
        $('#companyInfo').show();
    });

    let companyNumRegex = /^[1-9][0-9]{3}$/gm;
        submitBtn.on('click', function () {
            if (!companyNumRegex.test(companyNumber.val().trim())){
                companyNumber.css('border-color', 'red');

            }
            else{companyNumber.css("border",""); CN = true ; }
        });

    submitBtn.on('click',function () {
        if (UN === true && EM === true && P === true && CP === true && CN === true){
            $('#valid').show()
        }
    })
}
