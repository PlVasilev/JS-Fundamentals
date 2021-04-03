let ajaxFunctions = (function () {

    let constants = prodavachnikConstants;
    let views = prodavachnikViews;
    let storage = storageFunctions;

    // Request
    function request(method, endpoint, auth, data) {
        // Console log all AJAX requests for debugging
        console.log(`\n${method} ${endpoint} ${data ? '\n' + JSON.stringify(data) : ''}`);
        // Return the promise
        return $.ajax({
            method: method,
            url: constants.BASE_URL + endpoint,
            headers: auth,
            data: data
        })
    }

    // Error
    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        views.showError(errorMsg);
    }

    // Handshake
    function handshake() {
        request('GET', 'appdata/' + constants.APP_KEY, constants.BASIC_AUTH_HEADERS)
            .then(function (handshakeResult) {
                // console.log(handshakeResult)
                views.showInfo('Successfully connected to server.')
            })
            .catch(handleAjaxError)
    }

    // Get Data From Collection
    async function getCollectionData(collectionName, queryString, optionalPropertyName = '') {
        let result;
        await request(
            'GET',
            `appdata/${constants.APP_KEY}/${collectionName}/${queryString}`,
            storage.userAuthHeaders()
        )
            .then(function (r) {
                if (optionalPropertyName) {
                    result = r[optionalPropertyName];
                } else {
                    result = r;
                }
            })
            .catch(handleAjaxError);
        return result;
    }

    // Get Total Count of Collection
    async function getCollectionCount(collectionName) {
        return await getCollectionData(collectionName, '_count', 'count')
    }

    async function getPageData(collectionName, queryString, pageNr, itemsPerPage) {
        // Note: pageNr is 1-based
        return await getCollectionData(
            collectionName, `${queryString}&skip=${(pageNr - 1) * itemsPerPage}&limit=${itemsPerPage}`);
    }

    // POST To Collection
    async function postToCollection(collectionName, data) {
        // Return Promise
        return await request('POST', `appdata/${constants.APP_KEY}/${collectionName}`, storage.userAuthHeaders(), data)
    }

    // PUT To Collection
    async function putToCollection(collectionName, id, data) {
        // Return Promise
        return await request('PUT', `appdata/${constants.APP_KEY}/${collectionName}/${id}`,
            storage.userAuthHeaders(), data)
    }

    // DELETE From Collection
    async function deleteFromCollection(collectionName, id) {
        // Return Promise
        return await request('DELETE', `appdata/${constants.APP_KEY}/ads/${id}`, storage.userAuthHeaders())
    }

    // Attach AJAX "loading" event listener
    function attachLoadingEventListener(selector) {
        $(document).on({
            ajaxStart: function () {
                $(selector).show()
            },
            ajaxStop: function () {
                $(selector).hide()
            },
        })
    }

    return {
        request,
        handleAjaxError,
        handshake,
        getCollectionData,
        getCollectionCount,
        getPageData,
        postToCollection,
        putToCollection,
        deleteFromCollection,
        attachLoadingEventListener,
    }
})();
