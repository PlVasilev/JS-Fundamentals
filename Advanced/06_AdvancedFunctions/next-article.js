function getArticleGenerator(articles) {
    let content = $('#content');
    return function () {
        if (articles.length > 0){
            content.append($(`<article>${articles.shift()}</article>`))
        }
    }
}
