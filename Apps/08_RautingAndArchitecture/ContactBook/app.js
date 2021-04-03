$(() => {
    const app = Sammy('#main', function () {
        this.use('Handlebars', 'hbs');

    this.get('#/login',function () {
        this.partial('./templates/login.hbs')
    });
    this.get('#/register',function () {
        this.partial('./templates/register.hbs')
    });
    this.get('#/contacts',function () {
        this.partial('./templates/contacts.hbs')
    });
    this.get('#/profile',function () {
        this.partial('./templates/profile.hbs')
    });
    });

    app.run()
});