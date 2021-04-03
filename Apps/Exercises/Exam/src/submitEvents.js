function attachButtonEvents() {
    $('#register button').on('click', function (event) {
        event.preventDefault()
        let username = $("#register input[name=username]").val()
        let password = $("#register input[name=password]").val()
        let checkPass = $("#register input[name=repeatPass]").val()
        if (username.length > 2 && password.length > 5 && password === checkPass) {
            kinveyRequester.registerUser(username, password)
        } else if (username.length < 2) {
            showError("Username must be at least 3 characters long!")
        } else if (password.length < 5) {
            showError("Password must be at least 6 characters long!")
        } else {
            showError("Password nad Repeat Password do NOT match!")
        }
    })

    $('#login button').on('click', function (event) {
        event.preventDefault()
        let username = $("#login input[name=username]").val()
        let password = $("#login input[name=password]").val()
        kinveyRequester.loginUser(username, password)
    })

    $("#profile").find('a').eq(1).on('click', function () {
        kinveyRequester.logoutUser()
    })

    $('#container > nav').find('a').eq(3).on('click', function (event) {
        event.preventDefault()
        hideAllViews()
        $('#create-listing').show()
        $('#create-listing button').on('click',function (event) {
            event.preventDefault()
            let title = $("#create-listing input[name=title]").val()
            let description =  $('#create-listing input[name=description]').val()
            let brand =  $('#create-listing input[name=brand]').val()
            let model =  $('#create-listing input[name=model]').val()
            let year =  $('#create-listing input[name=year]').val()
            let imageUrl =  $('#create-listing input[name=imageUrl]').val()
            let fuel =  $('#create-listing input[name=fuelType]').val()
            let price = Number($('#create-listing input[name=price]').val())
            let seller = sessionStorage.getItem('username')
            if (
                title && title.length < 34 && description.length > 29 && description.length < 451 &&
                brand && brand.length < 12 && model && model.length < 12 && fuel && fuel.length < 12 && model.length > 3 &&
                year.length === 4 && price && price <= 1000000
            ){
                kinveyRequester.createListing(seller,title,description,imageUrl,brand,model,fuel,year,price)
            } else {
                showError('Invalid Input!')
            }
        })


    })

}