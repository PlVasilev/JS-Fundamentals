let prodavachnik = (function () {

    let ajax = ajaxFunctions;
    let views = prodavachnikViews;
    let crud = adsCrud;
    let user = prodavachnikUser;

    async function startApp() {
        ajax.handshake();
        views.showHideMenuLinks();
        views.showView('viewHome');

        // Add 'Views' and 'Actions' to the table headers
        $('#ads table tr:first-of-type')
            .append($('<th>Views</th>'))
            .append($('<th>Actions</th>'));

        // Add hidden viewCount Field to formEditAd (just for fun)
        $('#formEditAd').append($('<input>')
            .attr('type', 'number')
            .attr('name', 'viewCount')
            .attr('hidden', 'true')
        );

        setTimeout(100, () => {
        })
    }

    function attachAllEvents() {
        // Bind the navigation menu links
        $("#linkHome").on('click', views.showHomeView);
        $("#linkLogin").on('click', views.showLoginView);
        $("#linkRegister").on('click', views.showRegisterView);
        $("#linkListAds").on('click', crud.listAds);
        $("#linkCreateAd").on('click', views.showCreateAdView);
        $("#linkLogout").on('click', user.logoutUser);

        // Bind the form submit buttons
        $("#buttonLoginUser").on('click', user.loginUser);
        $("#buttonRegisterUser").on('click', user.registerUser);
        $("#buttonCreateAd").on('click', crud.createAd);
        $("#buttonEditAd").on('click', crud.editAd);
        $("form").on('submit', function (event) {
            event.preventDefault()
        });

        // Bind the info / error boxes
        $("#infoBox, #errorBox").on('click', function () {
            $(this).fadeOut(1000);
        });

        // Attach AJAX "loading" event listener
        ajax.attachLoadingEventListener("#loadingBox");
    }

    return {startApp, attachAllEvents};
})();


async function startApp() {
    await prodavachnik.startApp();
    prodavachnik.attachAllEvents();
}
