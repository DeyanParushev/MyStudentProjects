import stateHandler from '../helpers/stateHandler.js';
import models from '../models/index.js';

export default {
    get: {
        dashboard(context) {
            models.cause.getAll().then((response) => {
                let causes = response.docs.map((doc) => { return { ...doc.data(), id: doc.id } });
                context.causes = causes;
                stateHandler.extend(context).then((response) => {
                    context.partial('../views/cause/dashboard.hbs');
                });
            });
        },

        details(context) {
            let causeId = context.params.causeId;
            models.cause.get(causeId).then((response) => {
                let cause = response.data();
                cause.id = response.id;
                Object.keys(cause).map((key) => {
                    context[key] = cause[key];
                });

                context.canDonate = cause.creatorId !== sessionStorage.getItem('userId');
                stateHandler.extend(context).then((response) => {
                    context.partial('../views/cause/details.hbs');
                });
            })
        },

        create(context) {
            stateHandler.extend(context).then((response) => {
                context.partial('../views/cause/create.hbs');
            });
        },
    },

    post: {
        create(context) {
            const newCause = {
                ...context.params,
                donors: [],
                collectedFunds: 0,
                creatorId: sessionStorage.getItem('userId'),
            };

            models.cause.create(newCause).then((response) => {
                context.redirect('#/cause/dashboard');
            });
        }
    },

    edit: {
        donate(context) {
            let currentDonation = context.params.currentDonation;
            let causeId = context.params.causeId;

            models.cause.get(causeId).then((response) => {
                let cause = response.data();
                cause.id = response.id;
                let newFunds = Number(currentDonation) + Number(cause.collectedFunds);
                cause.collectedFunds = newFunds;
                cause.donors.push(sessionStorage.userEmail);

                firebase.firestore().collection("cause").doc(causeId).update(cause)
                    .then((response) => {
                        context.redirect(`#/cause/details/${causeId}`);
                    });
            });
        },
    },

    delete: {
        close(context) {
            let causeId = context.params.causeId;
            models.cause.delete(causeId)
                .then((response) => {
                    context.redirect('#/cause/dashboard');
                });
        },
    },
}