const BASE_URL = 'https://baas.kinvey.com/';
const APP_KEY = 'kid_Hy_h08PNX';
const APP_SECRET = 'b2ddcd272f2c4805b31669642391c30a';
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)};

function startApp() {
    showHideMenuLinks();
    showView('viewHome');
    attachAllEvents();
}

function showView(viewName) {
    $('main > section').hide(); // Hide all views
    $('#' + viewName).show() // Show the selected view only
}

function showHideMenuLinks() {
    $("#linkHome").show();
    if (sessionStorage.getItem('authToken') === null) { // No logged in user
        $("#linkLogin").show();
        $("#linkRegister").show();
        $("#linkListAds").hide();
        $("#linkCreateAd").hide();
        $("#linkLogout").hide();
    } else { // We have logged in user
        $("#linkLogin").hide();
        $("#linkRegister").hide();
        $("#linkListAds").show();
        $("#linkCreateAd").show();
        $("#linkLogout").show();
        $('#loggedInUser').text("Welcome, " + sessionStorage.getItem('username') + "!")
    }
}

function showHomeView() {
    showView('viewHome');
}

async function showLoginView() {
    $('#viewLogin').empty();
    let data = 0;
    const login = await $.get('./templates/login.hbs');
    let loginTemplate = Handlebars.compile(login);
    let finalData = {createAd: data};
    let resultHtml = loginTemplate(finalData);
    $('#viewLogin').append(resultHtml);
    showView('viewLogin');
    $('#formLogin').trigger('reset');
    $("#buttonLoginUser").on('click', loginUser);
}

async function showRegisterView() {
    $('#viewRegister').empty()
    let data = 0;
    const register = await $.get('./templates/register.hbs');
    let registerTemplate = Handlebars.compile(register);
    let finalData = {createAd: data};
    let resultHtml = registerTemplate(finalData);
    $('#viewRegister').append(resultHtml);
    $('#formRegister').trigger('reset');
    showView('viewRegister');
    $("#buttonRegisterUser").on('click', registerUser);
}

async function showCreateAd() {
    $('#viewCreateAd').empty()
    let data = 0;
    const createAdv = await $.get('./templates/createAdd.hbs');
    let createAddTemplate = Handlebars.compile(createAdv);
    let finalData = {createAd: data};
    let resultHtml = createAddTemplate(finalData);
    $('#viewCreateAd').append(resultHtml);
    $('#formRegister').trigger('reset');
    showView('viewCreateAd');
    $("#buttonCreateAd").on('click', createAd);
}

function showListAd() {
    $('#formRegister').trigger('reset');
    showAd();
}

function attachAllEvents() {
    // Bind the navigation menu links
    $("#linkHome").on('click', showHomeView);
    $("#linkLogin").on('click', showLoginView);
    $("#linkRegister").on('click', showRegisterView);
    $("#linkCreateAd").on('click', showCreateAd);
    $("#linkListAds").on('click', showListAd);
    $("#linkLogout").on('click', logoutUser);
    //  Bind the form submit buttons
    $("#buttonLoginUser").on('click', loginUser);
    $("#buttonRegisterUser").on('click', registerUser);
    $("form").on('submit', function (event) {
        event.preventDefault()
    });
    //  Bind the info / error boxes
    $("#infoBox, #errorBox").on('click', function () {
        $(this).fadeOut()
    });
    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show()
        },
        ajaxStop: function () {
            $("#loadingBox").hide()
        }
    })
}

// USER
async function registerUser() {
    let username = $('#formRegister input[name="username"]').val();
    let password = $('#formRegister input[name="passwd"]').val();
    let confpassword = $('#formRegister input[name="confPasswd"]').val();
    if (username && password && password === confpassword) {
        $.ajax({
            method: "POST",
            url: BASE_URL + 'user/' + APP_KEY + '/',
            headers: AUTH_HEADERS,
            data: {username, password}
        }).then(function (res) {
            signInUser(res, 'Registration successful.')
        }).catch(handleAjaxError)
    }
}

function signInUser(res, message) {
    saveAuthInSession(res);
    showHideMenuLinks();
    showHomeView();
    $('#loggedInUser').text("Hello " + res.username + "!");
    showInfo(message)
}

function saveAuthInSession(userInfo) {
    sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
    sessionStorage.setItem('username', userInfo.username);
    sessionStorage.setItem('userId', userInfo._id);
}

function loginUser() {
    let username = $('#formLogin input[name="username"]').val();
    let password = $('#formLogin input[name="passwd"]').val();
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function logoutUser() {
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/_logout',
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
    });
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks();
    $('#loggedInUser').text("");
    showInfo('Logout successful.');
}
//ADD
function createAd() {
    let title = $('#formCreateAd input[name="title"]').val();
    let description = $('#formCreateAd textarea[name="description"]').val();
    let datePublished = $('#formCreateAd input[name="datePublished"]').val();
    let price = Number($('#formCreateAd input[name="price"]').val());
    let imageUrl = $('#formCreateAd input[name="pictureUrl"]').val();
    if (title && description && datePublished && price) {
        let creatorId = sessionStorage.getItem('userId');
        let creatorUN = sessionStorage.getItem('username');
        let viewCounter = 0;
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {title, description, datePublished, price: Number(price), creatorId, creatorUN, imageUrl, viewCounter: Number(viewCounter)}
        }).then(function (res) {
            showAd();
            showInfo('Advert Created');
        }).catch(handleAjaxError)
    }
}

function showAd() {
    $.ajax({
        method: 'GET',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements',
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        showView('viewAds');
        $('#viewAds').empty();
        (async function () {
            const partialAddHtml = await $.get('./templates/partials/showAddPartial.hbs');
            Handlebars.registerPartial('showAddPartial', partialAddHtml);
            const viewAdv = await $.get('./templates/viewAds.hbs');
            let viewAddTemplate = Handlebars.compile(viewAdv);
            let finalData = {data: res};
            let resultHtml = viewAddTemplate(finalData);
            $('#viewAds').append(resultHtml);
        })();
    }).catch(handleAjaxError);
}

async function EditAd(advert) {
    let arr = advert.split(', ')
    if (arr[4] === sessionStorage.getItem('userId')) {
        showView('viewEditAd');
        $('#viewEditAd').empty()
        const editAdv = await $.get('./templates/editAdd.hbs');
        let createAddTemplate = Handlebars.compile(editAdv);
        let finalData = {
            data: {arrId: arr[8],
                creatorId: arr[4],
                creatorUN: arr[5],
                title: arr[0],
                description: arr[1],
                datePublished: arr[2],
                price: arr[3],
                imageUrl: arr[6],
                viewCounter: Number(arr[7])
            }
        };
        let resultHtml = createAddTemplate(finalData);
        $('#viewEditAd').append(resultHtml);
        $('#buttonEditAd').on('click', function () {
            $.ajax({
                method: 'PUT',
                url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + arr[8],
                headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
                data: {
                    title: $('#formEditAd input[name="title"]').val(),
                    description: $('#formEditAd textarea[name="description"]').val(),
                    datePublished: $('#formEditAd input[name="datePublished"]').val(),
                    price: Number($('#formEditAd input[name="price"]').val()),
                    creatorId: $('#formEditAd input[name="id"]').val(),
                    creatorUN: $('#formEditAd input[name="publisher"]').val(),
                    imageUrl: $('#formEditAd input[name="pictureUrl"]').val(),
                    viewCounter: Number(arr[7])
                }
            }).then(function (res) {
                showAd();
                showInfo('Ad edited.');
            }).catch(handleAjaxError)
        })
    } else {
        errorInfo('You Have to be Publisher to EDIT ADV')
    }
}

function deleteAd(element) {
    let arr = element.split(', ');
    if (arr[1] === sessionStorage.getItem('userId')) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + arr[0],
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
    }).then(function () {
        showAd();
        showInfo('Ad deleted.')
    }).catch(handleAjaxError)
    } else {
        errorInfo('You Have to be Publisher to DELETE ADV')
    }
}

function readMoreAd(advert) {
    let arr = advert.split(', ');
    let arrId = arr[8];
    let creatorId = arr[4];
    let creatorUN = arr[5];
    let title = arr[0];
    let description = arr[1];
    let datePublished = arr[2];
    let price = arr[3];
    let imageUrl = arr[6];
    let viewCounter = Number(arr[7]);
    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + arrId,
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, description, datePublished, price: Number(price), creatorId, creatorUN, imageUrl, viewCounter: Number(viewCounter) + 1}
    }).then(function (res) {
        $('#viewReadMoreAd').empty();
        showDetails(res)
    }).catch(handleAjaxError);
}
async function showDetails(res) {
    console.log(res);
    showView('viewReadMoreAd');
    const readMore = await $.get('./templates/advDetails.hbs');
    let readMoreTemplate = Handlebars.compile(readMore);
    let finalData = {data: res};
    let resultHtml = readMoreTemplate(finalData);
    $('#viewReadMoreAd').append(resultHtml);
}

// SHOW INFO SHOW ERROR
function errorInfo(message) {
    let infoBox = $('#errorBox');
    infoBox.text(message);
    infoBox.show();
    setTimeout(function () {
        $('#errorBox').fadeOut()
    }, 5000)
}

function showInfo(message) {
    let infoBox = $('#infoBox');
    infoBox.text(message);
    infoBox.show();
    setTimeout(function () {
        $('#infoBox').fadeOut()
    }, 3000)
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response);
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error.";
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description;
    showError(errorMsg)
}