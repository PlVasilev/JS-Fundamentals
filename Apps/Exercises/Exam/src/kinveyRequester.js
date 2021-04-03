const kinveyRequester = (function () {

    const BASE_URL = 'https://baas.kinvey.com/'
    const APP_KEY = 'kid_H1d8X3prX'
    const APP_SECRET = '9cb8637474184a44a038cba964ad90de'
    const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}

    function registerUser(username, password) {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
             $("#register input[name=username]").val('')
            $("#register input[name=password]").val('')
             $("#register input[name=repeatPass]").val('')
            signInUser(res, 'Registration successful.')
        }).catch(handleError)
    }

    function loginUser(username, password) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'user/' + APP_KEY + '/login',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            $("#login input[name=username]").val('')
            $("#login input[name=password]").val('')
            signInUser(res, 'Login successful.')
        }).catch(handleError)
    }

    function logoutUser() {
        $.ajax({
            method: 'POST',
            url: BASE_URL +  'user/' + APP_KEY + '/_logout',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
        }).catch(function (err) {
            console.log(err)
        })
        sessionStorage.clear()
        window.location.reload(true)
        showInfo("Logout successful")
        hideAllViews()
        showHomeView()
        showHideLinks()
    }

    function signInUser(res, message) {
        saveUserSession(res)
        showInfo(message);
        hideAllViews()
        carListings()
        showHideLinks()
    }

    function saveUserSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken)
        sessionStorage.setItem('username', userInfo.username)
        sessionStorage.setItem('userId', userInfo._id)
    }

    function handleError(err) {
        showError(err.message)
    }

    function createListing(seller,title,description,imageUrl,brand,model,fuel,year,price) {
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/cars',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {seller,title,description,imageUrl,brand,model,fuel,year,price}
        }).then(function () {
            $("#create-listing input[name=title]").val('')
            $('#create-listing input[name=description]').val('')
            $('#create-listing input[name=brand]').val('')
            $('#create-listing input[name=model]').val('')
            $('#create-listing input[name=year]').val('')
            $('#create-listing input[name=imageUrl]').val('')
            $('#create-listing input[name=fuelType]').val('')
            $('#create-listing input[name=price]').val('')
            showInfo("Created Listing.");
            carListings()
        }).catch(handleError)
    }


    async function getAllCars() {
        return await $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' + APP_KEY + '/cars?query={}&sort={"_kmd.ect": -1}',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        }).then(function (res) {
            return res
        }).catch(handleError)
    }

    async function getMyCars() {
        return await $.ajax({
            method: 'GET',
            url: BASE_URL + 'appdata/' +
            APP_KEY + `/cars?query={"seller":"${sessionStorage.getItem('username')}"}&sort={"_kmd.ect": -1}`,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        }).then(function (res) {
            console.log(res);
            return res
        }).catch(handleError)
    }

    function removeListing(id) {
        $.ajax({
            method: 'DELETE',
            url: BASE_URL + 'appdata/' + APP_KEY + '/cars/' + id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        }).then(function () {
            showInfo("Listing deleted.")
            hideAllViews()
            carListings()
        }).catch(handleError)
    }

    function editListing(id,seller,title,description,brand,model,year,imageUrl,fuel,price) {
        $.ajax({
            method: 'PUT',
            url: BASE_URL + 'appdata/' + APP_KEY + '/cars/' + id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {seller, title,description,brand,model,year,imageUrl,fuel,price}
        }).then(function (res) {
            $("#edit-listing input[name=title]").val('')
            $('#edit-listing input[name=description]').val('')
            $('#edit-listing input[name=brand]').val('')
            $('#edit-listing input[name=model]').val('')
            $('#edit-listing input[name=year]').val('')
            $('#edit-listing input[name=imageUrl]').val('')
            $('#edit-listing input[name=fuelType]').val('')
            $('#edit-listing input[name=price]').val('')
            showInfo("Successfully edited flight.")
            carListings()
        }).catch(handleError)
    }



    return {registerUser, loginUser, logoutUser,getAllCars,createListing,removeListing,editListing,getMyCars}
}())