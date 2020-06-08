import controllers from './controllers/index.js';

var app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');

    // Home
    this.get('#/home', controllers.home.get.home);

    // User
    this.get('#/user/login', controllers.user.get.login);
    this.get('#/user/register', controllers.user.get.reg);
    this.get('#/user/logout', controllers.user.get.logout);
    
    this.post('#/user/login', controllers.user.post.login);
    this.post('#/user/register', controllers.user.post.reg);

    // Causes
    this.get('#/cause/dashboard', controllers.cause.get.dashboard);
    this.get('#/cause/create', controllers.cause.get.create);
    this.get('#/cause/details/:causeId', controllers.cause.get.details);
    
    
    this.post('#/cause/create', controllers.cause.post.create);
    this.get('#/cause/delete/:causeId', controllers.cause.delete.close);
    this.put('#/cause/donate/:causeId', controllers.cause.edit.donate);
});

(() => {
    app.run('#/home')
})();