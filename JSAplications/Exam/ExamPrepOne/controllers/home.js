import stateHandler from '../helpers/stateHandler.js';

export default {
    get: {
        async home(context) {
            await stateHandler.extend(context);
            context.partial('./views/home/home.hbs');
        },
    },
};