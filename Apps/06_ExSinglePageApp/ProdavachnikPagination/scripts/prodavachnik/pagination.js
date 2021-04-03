/*
    // USAGE:

    // In <head> :

    <!-- Pagination -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.4.1/jquery.twbsPagination.js"></script>
    <link rel="stylesheet" type="text/css" href="styles/pagination.css"/>

    // In <body> :

    <!-- Paginator -->
    <div class="wrapper">
        <!--<div class="col-sm-12">-->
            <ul id="paginator" class="pagination"></ul>
        <!--</div>-->
    </div>

 */

let pagination = (function () {

    let ajax = ajaxFunctions;

    async function addPagination(
        collectionName, paginatorSelector, itemsPerPage, visiblePages, nextBtnContent, prevBtnContent,
        removeDataRowsFunction, pageClickFunction) {

        // Get adsTotalCount
        let itemsTotalCount = await ajax.getCollectionCount(collectionName);
        // console.log(`${collectionName} TotalCount: ${itemsTotalCount}`);

        removeDataRowsFunction();
        // Exit if there are no items
        if (itemsTotalCount === undefined || itemsTotalCount === 0) return;

        let totalPages = Math.ceil(itemsTotalCount / itemsPerPage);

        // Create Paginator
        return createPaginator(
            paginatorSelector, totalPages, visiblePages, nextBtnContent, prevBtnContent, pageClickFunction);
    }


    function createPaginator(
        paginatorSelector, totalPages, visiblePages, nextBtnContent, prevBtnContent, pageClickFunction) {
        let paginator = $(paginatorSelector);
        if (paginator.data("twbs-pagination")) {
            paginator.twbsPagination('destroy')
        }
        paginator.twbsPagination({
            totalPages,
            visiblePages,
            next: nextBtnContent,
            prev: prevBtnContent,
            onPageClick: pageClickFunction
        });
        return paginator;
    }


    async function pageClick(
        event, page,
        itemsPerPage, paginatorSelector, collectionName, queryString,
        removeDataRowsFunction, addDataRowsFunction) {

        // console.log('Page: ' + page);

        $(`${paginatorSelector} a:contains(${page})`).addClass('active');

        // remove the existing data rows
        removeDataRowsFunction();

        // Request the items for the current page
        let items = await ajax.getPageData(collectionName, queryString, page, itemsPerPage);
        if (items === undefined) return;

        // console.log(items);

        // display the current page rows
        addDataRowsFunction(items);
    }

    return {addPagination, createPaginator, pageClick};
})();
