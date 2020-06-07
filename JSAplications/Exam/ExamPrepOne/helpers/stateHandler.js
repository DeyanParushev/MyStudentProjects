export default {
    async extend(context) {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.

              context.isLoggedIn = true;
              context.userName = user.email;
              context.userId = user.uid;

              sessionStorage.setItem('userId', user.uid);
              sessionStorage.setItem('userEmail', user.email);
            } else {
              // No user is signed in.
              context.isLoggedIn = false;
              context.userName = null;
              context.userId = null;

              sessionStorage.removeItem('userId');
              sessionStorage.removeItem('userEmail');
            }
          });

        return  context.partials = {
            header: await context.load('./views/home/header.hbs'),
            footer: await context.load('./views/home/footer.hbs'),
        };
    },
};
