const kinveyRequester = (function () {

    const BASE_URL = 'https://baas.kinvey.com/'
    const APP_KEY = 'kid_Hy_h08PNX'
    const APP_SECRET = 'b2ddcd272f2c4805b31669642391c30a'
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}

    function signInUser(res, message) {
        saveUserSession(res)
        showInfo(message)
        hideAllContainers();
        showHomeView();
        // showCreateReceipt();
    }

    function saveUserSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
        sessionStorage.setItem('username', userInfo.username)
        sessionStorage.setItem('userId', userInfo._id)
    }

    function handleError(err) {
        showError(err.message)
    }

    function registerUser(username, password) {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            $('#register-form').trigger('reset');
            $('#login-form').trigger('reset');
            signInUser(res, 'Registration successful.');
        }).catch(handleError)
    }

    function loginUser(username, password) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Login successful.')
            $('#register-form').trigger('reset');
            $('#login-form').trigger('reset');
        }).catch(handleError)
    }

    function logoutUser() {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
        }).catch(function (err) {
            console.log(err)
        })
        sessionStorage.clear()
        window.location.reload(true)
        showInfo("Logout successful")
        hideAllContainers();
        welcomeSection();
    }

    function createReciep(active, productCount, total) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/receipts',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {active, productCount, total}
        }).then(function (res) {
            showHomeView()
        }).catch(handleError)
    }


    function getActiveReciep(userId) {
        return $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + `/receipts?query={"_acl.creator":"${userId}","active":"true"}`,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        }).then(function (res) {
            return res
        }).catch(handleError)
    }

    function getMyReciets(userId) {
        return $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + `/receipts?query={"_acl.creator":"${userId}","active":"false"}`,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        }).then(function (res) {
            console.log(res);
            return res
        }).catch(handleError)
    }


    function createEntry(receiptId, type, qty, price) {
        return $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/entries',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {receiptId, type, qty, price}
        }).then(function (res) {
            showInfo('Entry added!')
            $("#create-entry-form input[name=type]").val('');
            $('#create-entry-form input[name=qty]').val('');
            $('#create-entry-form input[name=price]').val('');
            return res
        }).catch(handleError)
    }

    function getAllEntries(receiptId) {
        console.log(receiptId);
        return $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + `/entries?query={"receiptId":"${receiptId}"}`,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        }).then(function (res) {
            return res
        }).catch(handleError)
    }


    function submitReciept(id, active, productCount, total) {
        $.ajax({
            method: 'PUT',
            url: BASE_URL + 'appdata/' + APP_KEY + '/receipts/' + id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {active, productCount, total}
        }).then(function (res) {
            showInfo("Submitted receipt!");
            hideAllContainers();
            showAllReceiptView();
        }).catch(handleError)
    }

    function deleteEntree(id, recieptId) {
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + 'appdata/' + APP_KEY + '/entries/' + id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        }).then(function (res) {
            showInfo("Entry Deleted.")
            renderEntrees(recieptId)
        }).catch(handleError)
    }

    return {
        registerUser, loginUser, logoutUser, createReciep, getActiveReciep,
        createEntry, getAllEntries, deleteEntree, submitReciept, getMyReciets
    }
}())