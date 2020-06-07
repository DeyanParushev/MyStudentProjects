export default {
    async reg(user) {
        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
    },

    async login(user) {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
    },

    async logout() {
        return firebase.auth().signOut();
    },
};