let prodavachnikUser = (function () {

    let constants = prodavachnikConstants;
    let storage = storageFunctions;
    let ajax = ajaxFunctions;
    let views = prodavachnikViews;

    // Register
    function registerUser() {
        let username = $('#formRegister input[name="username"]').val();
        let password = $('#formRegister input[name="passwd"]').val();

        ajax.request(
            "POST",
            'user/' + constants.APP_KEY + '/',
            constants.BASIC_AUTH_HEADERS,
            {username, password}
        )
            .then(function (userInfo) {
                signInUser(userInfo, 'Registration successful.')
            })
            .catch(ajax.handleAjaxError);
    }

    // Login
    function loginUser() {
        let username = $('#formLogin input[name="username"]').val();
        let password = $('#formLogin input[name="passwd"]').val();

        ajax.request(
            'POST',
            'user/' + constants.APP_KEY + '/login',
            constants.BASIC_AUTH_HEADERS,
            {username, password}
        )
            .then(function (userInfo) {
                signInUser(userInfo, 'Login successful.')
            })
            .catch(ajax.handleAjaxError)
    }

    // SignIn
    function signInUser(userInfo, message) {
        storage.saveAuthLocally(userInfo);
        views.showHideMenuLinks();
        views.showHomeView();
        views.showInfo(message);
    }


    // Logout
    function logoutUser() {
        ajax.request(
            'POST',
            'user/' + constants.APP_KEY + '/_logout',
            storage.userAuthHeaders()
        )
            .then(function () {
                storage.clearAuthLocally();
                views.showHideMenuLinks();
                views.showHomeView();
                views.showInfo('Logout successful.');
            })
            .catch(ajax.handleAjaxError);
    }

    return {
        registerUser,
        loginUser,
        logoutUser,
    }
})();
