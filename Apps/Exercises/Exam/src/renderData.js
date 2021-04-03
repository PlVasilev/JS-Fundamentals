function carListings() {
    hideAllViews()
    $('#car-listings').show();
    $('#listings').empty()
    renderCars()
}

async function renderCars() {
    let cars = await kinveyRequester.getAllCars();
    $('#listings').empty()
    if (cars.length > 0) {
        for (const car of cars) {
            let divCar = $('<div class="listing">')
            let pTitle = $(`<p>${car.title}</p>`)
            let img = $(`<img src="${car.imageUrl}">`)
            let h2Brand = $(`<h2>Brand: ${car.brand}</h2>`)
            let divInfo = $('<div class="info">')
            let divDataInfo = $('<div id="data-info">')
            let h3fuel = $(`<h3>Fuel: ${car.fuel}</h3>`)
            let h3year = $(`<h3>Year: ${car.year}</h3>`)
            let h3price = $(`<h3>Price: ${car.price} $</h3>`)
            divDataInfo.append(h3fuel).append(h3year).append(h3price)
            let divDataButtons = $('<div id="data-buttons">')
            let ul = $('<ul>')
            let liDetails = $('<li>')
            let aDetails = $('<a href="#" class="button-carDetails">Details</a>').on('click', function () {
                showDetailsView(car)
            })
            liDetails.append(aDetails)
            ul.append(liDetails)
            if (sessionStorage.getItem("userId") === car._acl['creator']) {
                let liEdit = $('<li>')
                let aEdit = $('<a href="#" class="button-carDetails">Edit</a>').on('click', function () {
                    showEditView(car)
                })
                liEdit.append(aEdit)
                let liDelete = $('<li>')
                let aDelete = $('<a href="#" class="button-carDetails">Delete</a>').on('click', function (a) {
                    kinveyRequester.removeListing(car._id);
                })
                liDelete.append(aDelete)
                ul.append(liEdit).append(liDelete)
            }
            divDataButtons.append(ul);
            divInfo.append(divDataInfo).append(divDataButtons)
            divCar.append(pTitle).append(img).append(h2Brand).append(divInfo)
            $('#listings').append(divCar)
        }
    } else {
        let div = $('<div class="listing">')
        div.append('<p class="no-cars">No cars in database.</p>')
        $('#listings').append(div);
    }
}

function showEditView(car) {
    hideAllViews();
    $('#edit-listing').show()
    let title = $("#edit-listing input[name=title]").val(car.title)
    let description = $('#edit-listing input[name=description]').val(car.description)
    let brand = $('#edit-listing input[name=brand]').val(car.brand)
    let model = $('#edit-listing input[name=model]').val(car.model)
    let year = $('#edit-listing input[name=year]').val(car.year)
    let imageUrl = $('#edit-listing input[name=imageUrl]').val(car.imageUrl)
    let fuel = $('#edit-listing input[name=fuelType]').val(car.fuel)
    let price = $('#edit-listing input[name=price]').val(car.price)
    $('#edit-listing button').on('click', function (event) {
        event.preventDefault()
        title = $("#edit-listing input[name=title]").val()
        description = $('#edit-listing input[name=description]').val()
        brand = $('#edit-listing input[name=brand]').val()
        model = $('#edit-listing input[name=model]').val()
        year = $('#edit-listing input[name=year]').val()
        imageUrl = $('#edit-listing input[name=imageUrl]').val()
        fuel = $('#edit-listing input[name=fuelType]').val()
        price = Number($('#edit-listing input[name=price]').val())
        if (
            title && title.length < 34 && description.length > 29 && description.length < 451 &&
            brand && brand.length < 12 && model && model.length < 12 && fuel && fuel.length < 12 && model.length > 3 &&
            year.length === 4 && price && price <= 1000000
        ) {
            kinveyRequester.editListing(car._id, sessionStorage.getItem('username'), title, description, brand, model, year, imageUrl, fuel, price)
        } else {
            showError('Invalid Input!')
        }
    })

}

function showDetailsView(car) {
    hideAllViews()
    $('.listing-details').show()
    $('.listing-details').empty()
    let mylistDetails = $(' <div class="my-listing-details">')
    let p = $(` <p id="auto-title">${car.title}</p>`)
    let img = $(`<img src="${car.imageUrl}">`)
    let divProp = $(`<div class="listing-props"><h3>Model: ${car.model}</h3><h3>Year: ${car.year}</h3><h3>Fuel: ${car.fuel}</h3><h3>Price: ${car.price}$</h3></div>`)
    let divListButtons = $(' <div class="listings-buttons">')
    if (sessionStorage.getItem("userId") === car._acl['creator']){
        let aEdit = $('<a href="#" class="button-list">Edit</a>').on('click', function () {
            showEditView(car)
        })
        let aDelete = $('<a href="#" class="button-list">Delete</a>').on('click', function () {
            kinveyRequester.removeListing(car._id);
        })
        divListButtons.append(aEdit).append(aDelete)
    }
    let pDescripTitle = $('<p id="description-title">Description:</p>')
    let pDescripPar = $(`<p id="description-para">${car.description}</p>`)
    if (sessionStorage.getItem("userId") === car._acl['creator']){
        mylistDetails.append(p).append(img).append(divProp).append(divListButtons).append(pDescripTitle).append(pDescripPar)
        $('.listing-details').append(mylistDetails)
    } else {
        mylistDetails.append(p).append(img).append(divProp).append(pDescripTitle).append(pDescripPar)
        $('.listing-details').append(mylistDetails)
    }

}

async function myCarListings() {
    $('.my-listings').show();
    $('.my-listings').empty();
    let h1 = $('<h1>My car listings</h1>');
    let divCarListings = $('<div class="car-listings">')
    let myCars = await kinveyRequester.getMyCars()
    console.log(myCars);
    if (myCars.length > 0) {
        for (const myCar of myCars) {
            let divMyList = $('<div class="my-listing">');
            let p = $(`<p id="listing-title">${myCar.title}</p>`)
            let img = $(`<img src="${myCar.imageUrl}">`)
            let divListProp = $(`<div class="listing-props"><h2>Brand: ${myCar.brand}</h2>
<h3>Model: ${myCar.model}</h3><h3>Year: ${myCar.year}</h3><h3>Price: ${myCar.price}$</h3></div>`)
            let divMyListingBut = $('<div class="my-listing-buttons">')
            let aDetails = $('<a href="#" class="my-button-list">Details</a>').on('click', function () {
                showDetailsView(myCar)
            })
            let aEdit = $('<a href="#" class="my-button-list">Edit</a>').on('click', function () {
                showEditView(myCar)
            })
            let aDelete = $('<a href="#" class="my-button-list">Delete</a>').on('click', function () {
                kinveyRequester.removeListing(myCar._id);
            })
            divMyListingBut.append(aDetails).append(aEdit).append(aDelete)
            divMyList.append(p).append(img).append(divListProp).append(divMyListingBut)
            divCarListings.append(divMyList)
        }
        $('.my-listings').append(h1).append(divCarListings)
    } else {
        let divMyList = $('<div class="my-listing">');
        divMyList.append('<p class="no-cars"> No cars in database.</p>');
        $('.my-listings').append(h1).append(divMyList)
    }

}
