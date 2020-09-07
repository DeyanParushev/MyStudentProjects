import stateHandler from '../helpers/stateHandler.js';
import models from '../models/index.js';

export default {
    get: {
        async dashboard(context) {
            let response = await models.article.getAll();
            let article = response.docs.map((doc) => { return { ...doc.data(), id: doc.id } });
            article.sort(function(a, b) {
                return a.title - b.title;
            });
            return article;
        },

        details(context) {
            let articleId = context.params.articleId;
            models.article.get(articleId).then((response) => {
                let article = response.data();
                article.id = response.id;
                Object.keys(article).map((key) => {
                    context[key] = article[key];
                });

                context.canEdit = article.creatorId === sessionStorage.getItem('userEmail');
                stateHandler.extend(context).then((response) => {
                    context.partial('./views/article/details.hbs');
                });
            })
        },

        create(context) {
            stateHandler.extend(context).then((response) => {
                context.partial('./views/article/create.hbs');
            });
        },

        edit(context) {
            let articleId = context.params.articleId;
            models.article.get(articleId).then((response) => {
                let article = response.data();
                article.id = response.id;
                Object.keys(article).map((key) => {
                    context[key] = article[key];
                });

                stateHandler.extend(context).then((response) => {
                    context.partial('./views/article/edit.hbs');
                });
            })
        }
    },

    post: {
        create(context) {
            const newArticle = {
                ...context.params,
                creatorId: sessionStorage.getItem('userEmail'),
            };
            models.article.create(newArticle).then((response) => {
                context.redirect('#/home');
            });
        }
    },

    edit: {
        edit(context) {
            let articleId = context.params.articleId;
            let newArticle = {
                ...context.params,
            };

            models.article.edit(articleId, newArticle).then((response) => {
                context.redirect(`#/home`);
            });
        },
    },

    delete: {
        close(context) {
            let articleId = context.params.articleId;
            models.article.delete(articleId)
                .then((response) => {
                    context.redirect('#/home');
                });
        },
    },
};