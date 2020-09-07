import stateHandler from '../helpers/stateHandler.js';
import controllers from './index.js';
export default {
    get: {
        async home(context) {
            await stateHandler.extend(context);
            let returnObject = await controllers.article.get.dashboard(context);
            context['C'] = [];
            context['JavaScript'] = [];
            context['Java'] = [];
            context['Python'] = [];

            returnObject.forEach(x => {
                if(x.category === 'C#'){
                    context['C'].push(x);
                } else if(x.category === 'Java'){
                    context['Java'].push(x);
                } else if(x.category === 'JavaScript'){
                    context['JavaScript'].push(x);
                } else if(x.category === 'Python'){
                    context['Python'].push(x);
                };
            });

            context['C'].sort(function(a, b) {
                return b.title.localeCompare(a.title);
            });

            context['Java'].sort(function(a, b) {
                return b.title.localeCompare(a.title);
            });

            context['JavaScript'].sort(function(a, b) {
                return b.title.localeCompare(a.title);
            });

            context['Python'].sort(function(a, b) {
                return b.title.localeCompare(a.title);
            });
            context.partial('./views/home/home.hbs');
        },
    },
};
