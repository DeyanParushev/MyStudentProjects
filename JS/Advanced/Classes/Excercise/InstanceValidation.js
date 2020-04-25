class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    };

    set clientId(id) {
        if (typeof (Number(id)) === 'number' && id.length === 6) {
            this.innerId = id;
        } else {
            throw new TypeError('Client ID must be a 6-digit number');
        };
    };

    get clientId() {
        return this.innerId;
    };

    set email(em) {
        if (/[A-Za-z]+\@[A-Za-z]+/.test(em)) {
            this.innerEmail = em;
        } else {
            throw new TypeError('Invalid e-mail');
        };
    };

    get email() {
        this.innerEmail;
    };

    set firstName(fn) {
        if (fn.length < 2 || !fn.length > 20) {
            throw new TypeError(`First name must be between 3 and 20 characters long`);
        };

        if (!(/[A-Za-z]+/.test(fn))) {
            throw new TypeError('First name must contain only Latin characters');
        };

        this.innerFirstName = fn;
    };

    get firstName() {
        return this.innerFirstName;
    };

    set lastName(ln) {
        if (ln.length < 2 || (ln.length > 20)) {
            throw new TypeError(`Last name must be between 3 and 20 characters long`);
        };

        if (!(/[A-Za-z]+/.test(ln))) {
            throw new TypeError('Last name must contain only Latin characters');
        };

        this.innerLastName = ln;
    };

    get lastName() {
        return this.innerLastName;
    };
};

let person = new CheckingAccount('123456', 'A@a', 'ivanov', 'D');
