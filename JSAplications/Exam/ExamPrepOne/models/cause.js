export default {
    getAll() {
       return firebase.firestore().collection('cause').get();
    },

    get(id) {
        return firebase.firestore().collection('cause').doc(id).get();
    },

    create(cause) {
       return firebase.firestore().collection('cause').add(cause);
    },

    delete(id) {
        return firebase.firestore().collection('cause').doc(id).delete();
    },
};