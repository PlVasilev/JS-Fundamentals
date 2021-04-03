let accountController = (() => {

    function loadRegisterPage(ctx) {
        this.loadPartials({
            header: '../TeamManagerSkeleton/templates/common/header.hbs',
            footer: '../TeamManagerSkeleton/templates/common/footer.hbs',
            registerForm: '../TeamManagerSkeleton/templates/register/registerForm.hbs'
        }).then(function () {
            this.partial('../TeamManagerSkeleton/templates/register/registerPage.hbs')
        })
    }

    function loadLoginPage(ctx) {
        this.loadPartials({
            header: '../TeamManagerSkeleton/templates/common/header.hbs',
            footer: '../TeamManagerSkeleton/templates/common/footer.hbs',
            loginForm: '../TeamManagerSkeleton/templates/login/loginForm.hbs'
        }).then(function () {
            this.partial('../TeamManagerSkeleton/templates/login/loginPage.hbs')
        })
    }

    function registerUser(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        let repeatPass = ctx.params.repeatPassword;
        if (password === repeatPass) {
            auth.register(username, password).then(function (userData) { // insted of async and await - .then
                auth.saveSession(userData);
                auth.showInfo('You`ve been registered');
                ctx.redirect('#/home')
            });
        }
    }

    function loginUser(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        auth.login(username, password).then(function (userData) { // insted of async and await - .then
            auth.saveSession(userData);
            auth.showInfo('You`ve been loggedIn');
            ctx.redirect('#/home')
        });
    }


    return{
    loadRegisterPage,loadLoginPage,loginUser,registerUser
    }
})();