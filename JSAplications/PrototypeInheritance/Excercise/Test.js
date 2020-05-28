let assert = require('chai').assert;
let Console = require('./C#Console');

describe('Console', () => {
    it('wroteLine should return a string', () => {
        let arg = 'dasda';
        let func = new Console.writeLine;
        assert.equal(func(arg), arg);
    })
})
