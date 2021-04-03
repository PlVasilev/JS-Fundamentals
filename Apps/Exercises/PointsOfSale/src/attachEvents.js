function hideAllContainers() {
    $('#profile').hide()
    $('#container > section').hide()
}

function welcomeSection() {
    $('#welcome-section').show()
}


async function showHomeView(ctx) {
    $('#create-receipt-view').show();
    $('#cashier > a').text(sessionStorage.getItem('username'))
    $('#active-entries').empty();
    $('#nav').find('a').eq(1).on('click', function () {
        hideAllContainers()
        showAllReceiptView()
    })
    let [res] = await kinveyRequester.getActiveReciep(sessionStorage.getItem('userId'))
    if (!res) {
        let active = true;
        let productCount = 0;
        let total = 0;
        createReceipt(active, productCount, total);
    } else {
        let receiptId = res._id;
        renderEntrees(receiptId);
        if (sessionStorage.getItem('authToken') !== null) {
            $('#profile').show()
        }
        $('#create-entry-form').on('submit', function (event) {
            event.preventDefault()
            let type = $('#create-entry-form input[name=type]').val()
            let qty = $('#create-entry-form input[name=qty]').val()
            let price = $('#create-entry-form input[name=price]').val()
            if (type && !isNaN(qty) && !isNaN(price)) {
                kinveyRequester.createEntry(receiptId, type, qty, price).then((res) => {
                    renderEntrees(res.receiptId)
                }).catch()
            } else {
                showError('Invalid input!')
            }
        })
        $('#create-receipt-form').on('submit', function (event) {
            event.preventDefault();
            let id = $('#create-receipt-form input[name=receiptId]').val()
            let active = false;
            let productCont = Number($('#create-receipt-form input[name=productCount]').val())
            let total = Number($('#create-receipt-form input[name=total]').val());
            if (productCont === 0 && total === 0) {
                showError('You must have entry so submit a receipt!')
            } else {
                kinveyRequester.submitReciept(id, active, productCont, total)
            }

        })
    }
}

async function showAllReceiptView() {
    $('#profile').show()
    $('#cashier > a').text(sessionStorage.getItem('username'))
    $('#all-receipt-view').show();
    $('#nav').find('a').eq(0).on('click', function () {
        hideAllContainers()
        showHomeView()
    })
    let receiptsToRender = await kinveyRequester.getMyReciets(sessionStorage.getItem('userId'));
    $('#all-receipt-view').empty();
    $('#all-receipt-view').append
    ($('<div class="table-head"><div class="col wide">Creation Date</div><div class="col wide">Items</div>' +
        '<div class="col">Total</div><div class="col">Actions</div></div>'))
    let total = 0;
    for (const receipt of receiptsToRender) {
        let receiptTotal = Number(receipt.total)
        let difRow = $('<div class="row">')
        let divCreation = $(`<div class="col wide">${receipt._kmd}</div>`)
        let divQnt = $(`<div class="col wide">${receipt.productCount}</div>`)
        let divTotal = $(`<div class="col">${receiptTotal}</div>`)
        let divDetails = $('<div class="col">')
        let aDetails = $('<a href="#">Details</a>')
        aDetails.on('click',function () {

        })
        total+=receiptTotal;
        divDetails.append(aDetails);
        difRow.append(divCreation).append(divQnt).append(divTotal).append(divDetails);
        $('#all-receipt-view').append()
    }


}

function renderEntrees(recieptId) {
    kinveyRequester.getAllEntries(recieptId).then((allEntrees) => {
        console.log(allEntrees);
        $('#active-entries').empty();
        let totalQty = 0;
        let totalSum = 0;
        for (const entree of allEntrees) {
            let qty = Number(entree.qty);
            let price = Number(entree.price);
            let subSum = qty * price;
            let divRow = $('<div class="row">');
            let divCalWideType = $(`<div class="col wide">${entree.type}</div>`)
            let divColWideQuant = $(`<div class="col wide">${qty}</div>`)
            let divColWidePrice = $(`<div class="col wide">${price}</div>`)
            let divColSum = $(`<div class="col">${subSum}</div>`)
            let divColRight = $(`<div class="col right">`)
            let aDelete = $(`<a href="#">&#10006;</a>`).on('click', function () {
                deleteEntree(entree, entree.receiptId)
            });
            divColRight.append(aDelete)
            divRow.append(divCalWideType).append(divColWideQuant).append(divColWidePrice).append(divColSum).append(divColRight);
            $('#active-entries').append(divRow);
            totalQty += qty;
            totalSum += subSum
        }
        $('#create-receipt-form input[name=receiptId]').val(recieptId)
        $('#create-receipt-form input[name=productCount]').val(totalQty)
        $('#create-receipt-form input[name=total]').val(totalSum)
        $('#create-receipt-form').find('div').eq(3).text(totalSum)
    }).catch((e) => {
        showError(e)
    })

}

function deleteEntree(entree, receiptId) {
    kinveyRequester.deleteEntree(entree._id, receiptId)
}

async function createReceipt(active, productCount, total) {
    kinveyRequester.createReciep(active, productCount, total);

}