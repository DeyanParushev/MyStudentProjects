export default {
    getAll() {
        return firebase.firestore().collection('article').get();
    },

    get(id) {
        return firebase.firestore().collection('article').doc(id).get();
    },

    create(article) {
        return firebase.firestore().collection('article').add(article);
    },

    delete(id) {
        return firebase.firestore().collection('article').doc(id).delete();
    },

    edit(id, article) {
        return firebase.firestore().collection("article").doc(id).update(article);
    }
};