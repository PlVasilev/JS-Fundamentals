let adsCrud = (function () {

    const constants = prodavachnikConstants;
    const helper = prodavachnikHelpers;
    const storage = storageFunctions;
    const ajax = ajaxFunctions;
    const views = prodavachnikViews;
    const paginator = pagination;
    const escHtml = helper.escapeHTML;
    const unescHtml = (x) => x;
    // if you change the above line to: const unescHtml = helper.unescapeHTML;
    // that would case any HTML content coming from the back-end to be unescaped
    // and may run scripts on the client side.

    // Create
    function createAd() {

        let form = $('#formCreateAd');

        let title = escHtml(form.find($('input[name="title"]')).val());
        let description = escHtml(form.find($('textarea[name="description"]')).val());
        let publisher = escHtml(storage.username());
        let datePublished = escHtml(form.find($('input[name="datePublished"]')).val());
        let price = escHtml(parseFloat(form.find($('input[name="price"]')).val().toString()).toFixed(2));
        let imageUrl = escHtml(form.find($('input[name="imageUrl"]')).val());

        if (!title || !description || !publisher || !datePublished || !price) return;
        form.trigger('reset');

        ajax.postToCollection('ads',
            {
                title,
                description,
                publisher,
                datePublished,
                price: helper.pad(price),
                imageUrl,
                viewCount: helper.pad(0),
            }
        )
            .then(function (res) {
                listAds();
                views.showInfo('Ad created.')
            })
            .catch(ajax.handleAjaxError);
    }

    // List
    async function listAds(page = 1) {

        const collection = 'ads';
        const paginatorSelector = '#paginator';
        const itemsPerPage = constants.ADS_PER_PAGE;
        const removeDataRows = () => helper.removeDataRows('#ads > table tr');

        // Go to 'viewAds'
        views.showView('viewAds');

        let adPaginator = paginator.addPagination(
            collection, paginatorSelector, itemsPerPage, 5, 'Next', 'Prev', removeDataRows, pageClick);

        async function pageClick(event, page) {
            await paginator.pageClick(
                event, page,
                itemsPerPage, paginatorSelector, collection, `?query={}&sort={"viewCount": -1}`,
                removeDataRows, addDataRows);
        }

        function addDataRows(ads) {
            for (let i = 0; i < ads.length; i++) {

                let tr = $(`<tr>`);
                tr.append(
                    `<td>${unescHtml(ads[i].title)}</td>` +
                    `<td>${unescHtml(ads[i].publisher)}</td>` +
                    `<td>${unescHtml(helper.nl2br(ads[i].description))}</td>` +
                    `<td style="text-align: right">${parseFloat(unescHtml(ads[i].price)).toFixed(2)}</td>` +
                    `<td>${unescHtml(ads[i].datePublished)}</td>` +
                    `<td style="text-align: right">${parseInt(unescHtml(ads[i].viewCount))}</td>`
                );

                let td = $('<td>')
                    .append($('<a href="#">[Read More]</a>').on('click', function () {
                        displayAd(ads[i]);
                    }));
                if (ads[i]._acl.creator === storage.userId()) {
                    td
                        .append($('<a href="#">[Delete]</a>').on('click', function () {
                            deleteAd(ads[i])
                        }))
                        .append($('<a href="#">[Edit]</a>').on('click', function () {
                            loadAdForEdit(ads[i])
                        }));
                }
                tr.append(td);
                $('#ads > table').append(tr);
            }
        }
    }


    // Display
    const minimumSecondsBetweenReadMoreRequests = 2; // this value can be adjusted; must be at least 1 second
    let lastReadMoreRequestTime;

    async function displayAd(ad) {
        // prevent too frequent ReadMore requests
        let now = new Date().getTime();
        if (now - lastReadMoreRequestTime < 1000 * minimumSecondsBetweenReadMoreRequests) return;
        lastReadMoreRequestTime = now;

        let sectionViewDetails = $('#viewDetailsAd');

        // increment viewCount
        ad.viewCount = helper.pad(parseInt(ad.viewCount.toString()) + 1);
        await ajax.putToCollection('ads', ad._id, ad)
            .then(async function (result) {

                // display ad data
                let img = await $(`<img src="${ad.imageUrl || './img/smile.jpg'}">`)
                    .css('max-height', '200px')
                    .addClass('img-fade-in');

                let div = await $('<div>')
                    .append($('<br>'))
                    .append(img)
                    .append($('<br>'))
                    .append($('<label>').text('Title:'))
                    .append($('<h1>').text(unescHtml(ad.title)))
                    .append($('<label>').text('Description:'))
                    .append($('<p>').html(helper.nl2br(unescHtml(ad.description))))
                    .append($('<label>').text('Publisher:'))
                    .append($('<div>').text(unescHtml(ad.publisher)))
                    .append($('<label>').text('Date:'))
                    .append($('<div>').text(unescHtml(ad.datePublished)))
                    .append($('<div style="color: #ccc">')
                        .append($('<br>'))
                        .append($('<label>').text('Views:'))
                        .append($('<div>').text(parseInt(unescHtml(ad.viewCount)))));

                sectionViewDetails.empty();
                sectionViewDetails.append(div);
            })
            .catch(ajax.handleAjaxError);

        views.showView('viewDetailsAd');
    }


    // Load For Edit
    function loadAdForEdit(ad) {
        let form = $('#formEditAd');

        form.find($('input[name="id"]')).val(unescHtml(ad._id));
        form.find($('input[name="title"]')).val(unescHtml(ad.title));
        form.find($('input[name="publisher"]')).val(unescHtml(ad.publisher));
        form.find($('textarea[name="description"]')).val(unescHtml(ad.description));
        form.find($('input[name="price"]')).val(parseFloat(unescHtml(ad.price)).toFixed(2));
        form.find($('input[name="datePublished"]')).val(unescHtml(ad.datePublished));
        form.find($('input[name="imageUrl"]')).val(unescHtml(ad.imageUrl));
        form.find($('input[name="viewCount"]')).val(unescHtml(ad.viewCount));
        views.showView('viewEditAd');
    }


    // Edit
    function editAd() {
        let form = $('#formEditAd');

        ajax.putToCollection('ads', form.find($('input[name="id"]')).val(),
            {
                title: escHtml(form.find($('input[name="title"]')).val()),
                publisher: escHtml(form.find($('input[name="publisher"]')).val()),
                description: escHtml(form.find($('textarea[name="description"]')).val()),
                price: escHtml(helper.pad(form.find($('input[name="price"]')).val())),
                datePublished: escHtml(form.find($('input[name="datePublished"]')).val()),
                imageUrl: escHtml(form.find($('input[name="imageUrl"]')).val()),
                viewCount: escHtml(helper.pad(form.find($('input[name="viewCount"]')).val())),
            }
        )
            .then(function (res) {
                listAds();
                views.showInfo('Ad edited.')
            })
            .catch(ajax.handleAjaxError);
    }


    // Delete
    const minimumSecondsBetweenDeleteRequests = 2.5; // this value can be adjusted; must be at least 1 second
    let lastDeleteRequestTime;

    function deleteAd(ad) {
        // prevent too frequent delete requests
        let now = new Date().getTime();
        if (now - lastDeleteRequestTime < 1000 * minimumSecondsBetweenDeleteRequests) return;
        lastDeleteRequestTime = now;

        // preform delete request
        ajax.deleteFromCollection('ads', ad._id)
            .then(function () {
                listAds();
                views.showInfo('Ad deleted.');
            })
    }

    return {
        createAd,
        listAds,
        editAd,
    }
})();
