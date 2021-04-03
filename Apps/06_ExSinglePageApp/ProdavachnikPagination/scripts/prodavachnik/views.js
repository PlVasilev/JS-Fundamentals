let prodavachnikViews = (function () {

    let storage = storageFunctions;

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (storage.authToken() === null) { // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
            $('#loggedInUser').text("").hide();
        } else { // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
            $('#loggedInUser').text("Welcome, " + storage.username() + "!").show();
        }
    }

    // Show Info
    function showInfo(message) {
        let infoBox = $('#infoBox');
        infoBox.text(message);
        infoBox.show();
        setTimeout(function () {
            $('#infoBox').fadeOut(500);
        }, 3000)
    }

    // Show Error
    function showError(errorMsg) {
        let errorBox = $('#errorBox');
        errorBox.text("Error: " + errorMsg);
        errorBox.show();
    }

    // Show views...
    function showView(viewName) {
        $('main > section').hide(); // Hide all views
        $('#' + viewName).show();   // Show the selected view only
    }

    function showHomeView() {
        showView('viewHome');
        // console.log(isView('viewHome'));
        // console.log(isView('viewLogin'));
    }

    function showLoginView() {
        $('#formLogin').trigger('reset');
        showView('viewLogin');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd')
    }


    // function isView(viewName) {
    //     return $('#' + viewName).getAttribute('display')
    // }

    return {
        showHideMenuLinks,
        showInfo,
        showError,
        showView,
        showHomeView,
        showLoginView,
        showRegisterView,
        showCreateAdView,
    }
})();
