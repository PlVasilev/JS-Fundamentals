// let homeController = (() => {
//
//     function loadHomePage(ctx) {
//         ctx.loggedIn = auth.isAuthenticated();
//         ctx.username = auth.getUserName();
//         this.loadPartials({
//             header: '../TeamManagerSkeleton/templates/common/header.hbs',
//             footer: '../TeamManagerSkeleton/templates/common/footer.hbs'
//         }).then(function () {
//             this.partial('../TeamManagerSkeleton/templates/home/home.hbs')
//         })
//     }
//
//     function loadAboutPage(ctx) {
//         ctx.loggedIn = auth.isAuthenticated();
//         ctx.username = auth.getUserName();
//         this.loadPartials({
//             header: '../TeamManagerSkeleton/templates/common/header.hbs',
//             footer: '../TeamManagerSkeleton/templates/common/footer.hbs'
//         }).then(function () {
//             this.partial('../TeamManagerSkeleton/templates/about/about.hbs')
//         })
//     }
//
//
//     return {
//         loadAboutPage, loadHomePage
//     }
// })();
//
