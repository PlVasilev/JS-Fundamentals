let prodavachnikHelpers = (function () {

    let constants = prodavachnikConstants;

    function pad(n, width, z) {
        width = width || constants.PADDING;
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function removeDataRows(selector) {
        // remove all rows except the header row (row zero)
        $(selector).each((index, element) => {
            if (index > 0) {
                $(element).remove()
            }
        });
    }

    function nl2br (str, is_xhtml) {
        let breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
        return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1'+ breakTag +'$2');
    }

    // NB: I'm not sure if there is a better way of implementing the below functions.
    // The back-end must also take its own precautions against incoming unescaped HTML and SQL injection.
    // I have NOT protected my Kinvey back-end for this exercise, so please don't hack it. Thanks.

    function escapeHTML(html) {
        let e = document.createElement('textarea');
        e.textContent = html;
        let text =  e.innerHTML;
        // console.log(`Escaped:\n${text}`);
        return text;
    }

    function unescapeHTML(text) {
        let e = document.createElement('textarea');
        e.innerHTML = text;
        let html =  e.textContent;
        // console.log(`Unescaped:\n${html}`);
        return html;
    }


    return {
        pad,
        removeDataRows,
        nl2br,
        escapeHTML,
        unescapeHTML,
    }
})();
