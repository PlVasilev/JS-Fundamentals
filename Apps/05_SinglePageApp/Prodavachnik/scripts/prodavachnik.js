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

function showLoginView() {
    showView('viewLogin');
    $('#formLogin').trigger('reset')
}

function showRegisterView() {
    $('#formRegister').trigger('reset');
    showView('viewRegister');
}

function showCreateAd() {
    $('#formRegister').trigger('reset');
    showView('viewCreateAd');
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
    $("#buttonCreateAd").on('click', createAd);
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
function registerUser() {
    let username = $('#formRegister input[name="username"]').val();
    let password = $('#formRegister input[name="passwd"]').val();
    let confpassword = $('#formRegister input[name="confPasswd"]').val();
    if (username && password && password === confpassword){
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
    let imageUrl = $('#formCreateAd input[name="pictureUrl"]').val()
    if (title && description && datePublished && price){
        let creatorId = sessionStorage.getItem('userId');
        let creatorUN = sessionStorage.getItem('username');
        let viewCounter = 0;
        $.ajax({
            method: 'POST',
            url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements',
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {title, description, datePublished, price: Number(price), creatorId, creatorUN,imageUrl,viewCounter : Number(viewCounter)}
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
        $('#ads > table').empty();
        let td1 = $('<th>Title</th>');
        let td2 = $('<th>Publisher</th>');
        let td3 = $('<th>Description</th>');
        let td4 = $('<th>Date Published</th>');
        let td5 = $('<th>Price</th>');
        let td6 = $('<th>Actions</th>');
        let headers = $('<tr>').append(td1).append(td2).append(td3).append(td4).append(td5).append(td6);
        $('#ads > table').append(headers);
        for (const advert of res) {
            let tr = $(`<tr><td>${advert.title}</td>` +
                `<td>${advert.description}</td>` +
                `<td>${advert.creatorUN}</td>` +
                `<td>${advert.datePublished}</td>` +
                `<td>${advert.price}</td>`);
            let td = $('<td>');
            let aReadMore = $('<a href="#">[Read More]</a>').on('click', function () {
                readMoreAd(advert);
            });
            td.append(aReadMore)
            if (advert.creatorId === sessionStorage.getItem("userId")) {
                let aDel = $('<a href="#">[Delete]</a>').on('click', function () {
                    deleteAd(advert);
                });
                let aEdit = $('<a href="#">[Edit]</a>').on('click', function () {
                    EditAd(advert);
                });
                td.append(aDel).append(aEdit);

            }
            tr.append(td);
            $('#ads > table').append(tr);
        }
    }).catch(handleAjaxError)
}

function EditAd(advert) {
    showView('viewEditAd');
    $('#formEditAd input[name="id"]').val(advert.creatorId);
    $('#formEditAd input[name="publisher"]').val(advert.creatorUN);
    $('#formEditAd input[name="title"]').val(advert.title);
    $('#formEditAd textarea[name="description"]').val(advert.description);
    $('#formEditAd input[name="datePublished"]').val(advert.datePublished);
    $('#formEditAd input[name="price"]').val(advert.price);
    $('#formEditAd input[name="pictureUrl"]').val(advert.imageUrl);

    $('#buttonEditAd').on('click',function () {
        let creatorId = $('#formEditAd input[name="id"]').val();
        let creatorUN = $('#formEditAd input[name="publisher"]').val();
        let title = $('#formEditAd input[name="title"]').val();
        let description = $('#formEditAd textarea[name="description"]').val();
        let datePublished = $('#formEditAd input[name="datePublished"]').val();
        let price = $('#formEditAd input[name="price"]').val();
        let imageUrl = $('#formEditAd input[name="pictureUrl"]').val();
        let viewCounter = advert.viewCounter;
        $.ajax({
            method: 'PUT',
            url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + advert._id,
            headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
            data: {title, description, datePublished, price: Number(price), creatorId, creatorUN,imageUrl,viewCounter : Number(viewCounter) }
        }).then(function (res) {
            showAd();
            showInfo('Ad edited.');
        }).catch(handleAjaxError)
    })
}

function deleteAd(advert) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + advert._id,
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
    }).then(function () {
        showAd();
        showInfo('Ad deleted.')
    })
}

function readMoreAd(advert) {
    let creatorId = advert.creatorId;
    let creatorUN = advert.creatorUN;
    let title = advert.title;
    let description = advert.description;
    let datePublished = advert.datePublished;
    let price = advert.price;
    let imageUrl = advert.imageUrl;
    let viewCounter = Number(advert.viewCounter);
    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/advertisements/' + advert._id,
        headers: {Authorization: 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, description, datePublished, price: Number(price), creatorId, creatorUN,imageUrl,viewCounter : Number(viewCounter) + 1 }
    }).then(function (res) {
    }).catch(handleAjaxError);

    $('#advDetails').empty();
    showView('viewReadMoreAd');
    let image = $(`<img src="${advert.imageUrl}" width="192" height="108">`);
    let title1 = $(`<div>Title</div>`);
    let titleh1 = $(`<h1>${title}</h1>`);
    let description1 = $(`<div>Description:</div>`);
    let descriptionText = $(`<div>${description}</div>`);
    let publisher = $(`<div>Publisher</div>`);
    let publisherText = $(`<div>${creatorUN}</div>`);
    let date = $(`<div>Date</div>`);
    let dateText = $(`<div>${datePublished}</div>`);
    let viewCount = $(`<div>Views</div>`);
    let viewCountText = $(`<div>${viewCounter + 1}</div>`);
    $('#advDetails')
        .append(image)
        .append(title1)
        .append(titleh1)
        .append(description1)
        .append(descriptionText)
        .append(publisher)
        .append(publisherText)
        .append(date)
        .append(dateText)
        .append(viewCount)
        .append(viewCountText)
        .append($('<button>Back</button>').on('click',function () {
            showAd();
        }))
}
// SHOW INFO SHOW ERROR
function errorInfo(message) {
    let infoBox = $('#errorBox');
    infoBox.text(message);
    infoBox.show();
    setTimeout(function () {
        $('#errorBox').fadeOut()
    }, 3000)
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