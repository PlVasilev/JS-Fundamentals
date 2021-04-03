function hideAllViews() {
    $('#container > div').hide();
    $('.footer').show()
}

function showHideLinks() {
    hideAllLinks()
    if (sessionStorage.getItem("authToken")) {
        $('#container > nav').find('a').eq(1).show()
        $('#container > nav').find('a').eq(2).show()
        $('#container > nav').find('a').eq(3).show()
        $('#container > nav').find('div').eq(0).show()
        $('#profile').find('a').eq(0).text(sessionStorage.getItem('username'))
    } else {

    }
}

function showHomeView() {
    $('#main').show()
}

function hideAllLinks() {
    $('#container > nav').find('a').eq(1).hide()
    $('#container > nav').find('a').eq(2).hide()
    $('#container > nav').find('a').eq(3).hide()
    $('#container > nav').find('div').eq(0).hide()
}

function attachLinkEvents() {
    $('#button-div').find('a').eq(0).on('click', function () {
        hideAllViews()
        $('#login').show()
    });

    $('#button-div').find('a').eq(1).on('click', function () {
        hideAllViews()
        $('#register').show()
    });

    $('#login a').on('click', function () {
        hideAllViews()
        $('#register').show()
    });

    $('#container > nav').find('a').eq(0).on('click', function () {
       if (sessionStorage.getItem("authToken")){
           hideAllViews()
           carListings()
       } else {
           hideAllViews()
           showHomeView()
       }
    })

    $('#container > nav').find('a').eq(1).on('click', function () {
        hideAllViews()
        carListings()
    })

    $('#container > nav').find('a').eq(2).on('click', function () {
        hideAllViews()
        myCarListings()
    })

}

