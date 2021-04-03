function submitEvents() {
    $('#register-form').on('submit',function (event) {
        event.preventDefault()
        let username = $('#username-register').val()
        let password = $('#password-register').val()
        let checkPass = $('#password-register-check').val()
        if (username.length > 4 && password === checkPass && password) {
            kinveyRequester.registerUser(username, password)
        } else if (username.length < 5) {
            showError("Username must be at least 5 characters long!")
        } else if (password !== checkPass) {
            showError("Password does not match!")
        } else {
            showError("Username and password can not be empty!")
        }
    });

    $('#login-form').on('submit',function (event) {
        event.preventDefault();
        let username = $('#username-login').val()
        let password = $('#password-login').val()
        if (username && password) {
            kinveyRequester.loginUser(username, password)
        } else {
            showError("Username and password can not be empty!")
        }
    });

    $(".logout").on('click', function () {
        kinveyRequester.logoutUser()
    })
}