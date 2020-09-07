function objectExtention() {
    let obj = {
        __proto__: {},
        extend: function(template) {
            let templateProps = Object.keys(template);
            templateProps.forEach(e => {
                if (typeof(template[e]) === 'function') {
                    this.__proto__[`${e}`] = template[`${e}`];
                } else {
                    this[`${e}`] = template[`${e}`];
                };
            });
        },
    };

    return obj;
};
