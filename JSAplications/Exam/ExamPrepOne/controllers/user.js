import stateHandler from '../helpers/stateHandler.js';
import models from '../models/index.js';

export default {
    get: {
        async login(context) {
            await stateHandler.extend(context);
            context.partial('./views/user/login.hbs');
        },

        async reg(context) {
            await stateHandler.extend(context);
            context.partial('./views/user/register.hbs');
        },

        async logout(context) {
            await models.user.logout(context);
            context.redirect('#/home');
        },
    },

    post: {
        login(context) {
            let user = {
                email: context.params.username,
                password: context.params.password,
            };

            models.user.login(user)
                .then((response) => {
                    context.redirect('#/home');
                })
        },

        reg(context) {
            let user = {
                email: context.params.username,
                password: context.params.password,
                rePassword: context.params.rePassword,
            };

            if(user.password === user.rePassword){
                models.user.reg(user).then((response) => {
                    context.redirect('#/home');
                });
            };
        },
    }
}