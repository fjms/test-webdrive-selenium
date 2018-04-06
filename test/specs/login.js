var assert = require('assert');

describe('servo login page', function () {
    it('Load page', function () {
        browser.url('http://localhost:3000');
        let title = browser.getTitle();
        assert.equal(title, 'ServoElit');
    });

    it('Login process', function () {
        browser.click('#login-dropdown-list .dropdown-toggle')
            .setValue('#login-username-or-email', '')
            .setValue('#login-password', '')
            .click('#login-buttons-password')

        browser.waitForExist('#login-buttons-logout', 7000);
        browser.click('#login-dropdown-list');
        let btnlogout = $('button#login-buttons-logout.btn.btn-block.btn-primary');
        assert.equal(btnlogout.getText(), 'Cerrar sesión');
        browser.click('#login-dropdown-list');
    });
});



