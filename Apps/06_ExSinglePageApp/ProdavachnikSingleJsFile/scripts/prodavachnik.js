function startApp() {
    const BASE_URL = "https://baas.kinvey.com/";
    const APP_KEY = "kid_r13HOBPNX";
    const APP_SECRET = "ca5820512b2a4f828ac85f98d48f037b";
    const AUTH_HEADERS = {
        "Authorization": "Basic " + btoa(APP_KEY + ":" + APP_SECRET)
    };

    $('#linkHome').on('click',showHomeView);
    $('#linkLogin').on('click',showLoginView);
    $('#linkRegister').on('click',showRegisterView);
    $('#linkListAds').on('click',listAds);
    $('#linkCreateAd').on('click',showCreateAdView);
    $('#linkLogout').on('click',logoutUser);

    $('#buttonLoginUser').on('click',loginUser);
    $('#buttonRegisterUser').on('click',registerUser);
    $('#buttonCreateAd').on('click',createAd);
    $('#buttonEditAd').on('click',editAd);

    $('#infoBox, #errorBox').on('click',function () {
        $(this).fadeOut();
    });

    $(document).on({
        ajaxStart: function () {
            $('#loadingBox').show();
        },
        ajaxStop: function () {
            $('#loadingBox').hide();
        }
    });

    sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');

    function showHideMenuLinks() {
        $('#linkHome').show();

        if(sessionStorage.getItem('authToken')) {
            $('#linkLogin').hide();
            $('#linkRegister').hide();
            $('#linkListAds').show();
            $('#linkCreateAd').show();
            $('#linkLogout').show();
            $('#loggedInUser').show();
        } else {
            $('#linkLogin').show();
            $('#linkRegister').show();
            $('#linkListAds').hide();
            $('#linkCreateAd').hide();
            $('#linkLogout').hide();
        }
    }

    function showView(viewName) {
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    function registerUser() {
        let userData = {
            username: $('#formRegister input[name=username]').val(),
            password: $('#formRegister input[name=passwd]').val()
        };

        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/",
            headers: AUTH_HEADERS,
            data: userData,
            success: registerSuccess,
            error: handleAjaxError
        });

        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('User registration successful.');
        }
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if(response.readyState === 0) {
            errorMsg = "Cannot connect due to network error.";
        }
        if(response.responseJSON && response.responseJSON.description) {
            errorMsg = response.responseJSON.description;
        }

        showError(errorMsg);
    }

    function saveAuthInSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        $('#loggedInUser').text("Welcome, " + username + "!");
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function () {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text('');
        showHideMenuLinks();
        showView('viewHome');
        showInfo('Logout successful.')
    }

    function loginUser() {
        let userData = {
            username: $('#formLogin input[name=username]').val(),
            password: $('#formLogin input[name=passwd]').val()
        };

        $.ajax({
            method: "POST",
            url: BASE_URL + "user/" + APP_KEY + "/login",
            headers: AUTH_HEADERS,
            data: userData,
            success: loginSuccess,
            error: handleAjaxError
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAds();
            showInfo('Login successful.');
        }
    }

    function listAds() {
        $('#ads').empty();
        showView('viewAds');

        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + "/adverts",
            headers: getKinveyUserAuthHeaders(),
            success: loadAdsSuccess,
            error: handleAjaxError
        });

        function loadAdsSuccess(ads) {
            showInfo('Ads loaded.');
            if(ads.length == 0) {
                $('#ads').text('No books in the library.');
            } else {
                let adsTable = $('<table>')
                    .append($('<tr>')
                        .append('<th>Title</th><th>Description</th><th>Publisher</th><th>Date Published</th><th>Price</th><th>Actions</th>'));

                for(let ad of ads){
                    appendAdRow(ad, adsTable);
                }

                $('#ads').append(adsTable)
            }

            function appendAdRow(ad, adsTable) {
                let links = [];
                if(ad._acl.creator == sessionStorage['userId']) {
                    let deleteLink = $('<a href="#">[Delete]</a>').on('click',function () {
                        deleteAd(ad);
                    });
                    let editLink = $('<a href="#">[Edit]</a>').on('click',function () {
                        loadAdForEdit(ad);
                    });

                    links = [deleteLink, ' ', editLink];
                }

                let readMoreLink = $('<a href="#">[Read More]</a>').on('click',function () {
                    displayAdvert(ad);
                });

                links.unshift(' ');
                links.unshift(readMoreLink);

                adsTable.append($('<tr>')
                    .append($('<td>').text(ad.title), $('<td>').text(ad.description), $('<td>').text(ad.publisher), $('<td>').text(ad.datePublished), $('<td>').text(ad.price),$('<td>').append(links)
                    ));
            }
        }
    }

    function getKinveyUserAuthHeaders() {
        return {
            "Authorization": "Kinvey " + sessionStorage.getItem('authToken')
        };
    }

    function createAd() {
        const kinveyUserUrl = `${BASE_URL}user/${APP_KEY}/${sessionStorage.getItem('userId')}`;

        $.ajax({
            method: "GET",
            url: kinveyUserUrl,
            headers: getKinveyUserAuthHeaders(),
            success: afterPublisherRequest,
            error: handleAjaxError
        });

        function afterPublisherRequest(publisher) {
            let adData = {
                title: $('#formCreateAd input[name=title]').val(),
                description: $('#formCreateAd textarea[name=description]').val(),
                publisher: publisher.username,
                datePublished: $('#formCreateAd input[name=datePublished]').val(),
                price: Number(Number($('#formCreateAd input[name=price]').val()).toFixed(2)),
                image: $('#formCreateAd input[name=image]').val()
            };

            $.ajax({
                method: "POST",
                url: BASE_URL + "appdata/" + APP_KEY + "/adverts",
                headers: getKinveyUserAuthHeaders(),
                data: adData,
                success: createAdSuccess,
                error: handleAjaxError
            });

            function createAdSuccess(response) {
                listAds();
                showInfo('Ad created.');
            }
        }
    }

    function loadAdForEdit(ad) {
        $.ajax({
            method: "GET",
            url: BASE_URL + "appdata/" + APP_KEY + "/adverts/" + ad._id,
            headers: getKinveyUserAuthHeaders(),
            success: loadAdForEditSuccess,
            error: handleAjaxError
        });

        function loadAdForEditSuccess(ad) {
            $('#formEditAd input[name=id]').val(ad._id);
            $('#formEditAd input[name=publisher]').val(ad.publisher);
            $('#formEditAd input[name=title]').val(ad.title);
            $('#formEditAd textarea[name=description]').val(ad.description);
            $('#formEditAd input[name=datePublished]').val(ad.datePublished);
            $('#formEditAd input[name=price]').val(ad.price);
            $('#formEditAd input[name=image]').val(ad.image);

            showView('viewEditAd');
        }
    }

    function editAd() {
        let adData = {
            title: $('#formEditAd input[name=title]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            publisher: $('#formEditAd input[name=publisher]').val(),
            datePublished: $('#formEditAd input[name=datePublished]').val(),
            price: Number(Number($('#formEditAd input[name=price]').val()).toFixed(2)),
            image: $('#formEditAd input[name=image]').val()
        };

        $.ajax({
            method: "PUT",
            url: BASE_URL + "appdata/" + APP_KEY + "/adverts/" + $('#formEditAd input[name=id]').val(),
            headers: getKinveyUserAuthHeaders(),
            data: adData,
            success: editAdSuccess,
            error: handleAjaxError
        });

        function editAdSuccess(response) {
            listAds();
            showInfo('Ad edited.');
        }
    }

    function displayAdvert(ad) {
        $('#viewAdDetails').html($('<div>').append(
            $('<img>').attr('src', ad.image),
            $('<br>'),
            $('<label>').text('Title:'),
            $('<h1>').text(ad.title),
            $('<label>').text('Description:'),
            $('<p>').text(ad.description),
            $('<label>').text('Publisher:'),
            $('<div>').text(ad.publisher),
            $('<label>').text('Date:'),
            $('<div>').text(ad.datePublished)
        ));

        showView('viewAdDetails');
    }

    function deleteAd(ad) {
        $.ajax({
            method: "DELETE",
            url: BASE_URL + "appdata/" + APP_KEY + "/adverts/" + ad._id,
            headers: getKinveyUserAuthHeaders(),
            success: deleteAdSuccess,
            error: handleAjaxError
        });

        function deleteAdSuccess(response) {
            listAds();
            showInfo('Ad deleted.');
        }
    }
}