const app = Sammy('#main',function () {
    this.use('Handlebars', 'hbs'); // we say SAMMY USE HBS
    this.get('#/about/:name', function () { // :name (name е променлива) като има : е променлива
        this.name = this.params.name;
        this.title = "Sammy";
        this.partial("./hello.hbs")
    })

    this.get('#/login', function () {
        this.swap("<form action=\"#/login\" method=\"post\">\n" +
            "  User: <input name=\"user\" type=\"text\">\n" +
            "  Pass: <input name=\"pass\" type=\"password\">\n" +
            "  <input type=\"submit\" value=\"Login\">\n" +
            "</form>\n")
    })
    this.post('#/login',function (ctx) { // to url
        console.log(ctx.params.user);
        console.log(ctx.params.pass);
    })

    this.get('#/contact', function () {
        this.swap("<h2>Contact</h2>")
    })
})

$(() => app.run())