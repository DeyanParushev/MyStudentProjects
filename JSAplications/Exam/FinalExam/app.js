import controllers from './controllers/index.js';

var app = Sammy('#root', function () {

    this.use('Handlebars', 'hbs');
    
    this.get('#/home', controllers.home.get.home)
    this.get('#/create', controllers.article.get.create);
    this.get('#/login', controllers.user.get.login);
    this.get('#/register', controllers.user.get.reg);
    this.get('#/logout', controllers.user.get.logout);
    this.get('#/details/:articleId', controllers.article.get.details);
    this.get('#/edit/:articleId', controllers.article.get.edit);
    this.get('#/delete/:articleId', controllers.article.delete.close);

    this.post('#/login', controllers.user.post.login);
    this.post('#/create', controllers.article.post.create);
    this.post('#/edit/:articleId', controllers.article.edit.edit);
    this.post('#/register', controllers.user.post.reg);
});

(() => {
    app.run('#/home')
})();
