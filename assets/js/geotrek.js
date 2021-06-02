'use strict';
(function () {

    function getParams(form) {

        var name = form.querySelector('input[name="fname"]').value;
        var email = form.querySelector('input[name="email"]').value;
        var phone = form.querySelector('input[name="phone"]').value;
        var company = form.querySelector('input[name="company"]').value;
        var message = form.querySelector('textarea').value;
        message =  encodeURIComponent(
            'Organisation: ' + company
            + '\n'
            + '\n'
            + message
        );

        return (
            'name=' + name
            + '&email=' + email
            + '&phone=' + phone
            + '&message=' + message
        );
    }

    function submitForm(form) {
        const data = new FormData(form);
        const value = Object.fromEntries(data.entries());

        fetch('https://hook.integromat.com/rkl1zqyuce4jrhiahpresmvrquc1nayf', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(value),
        }).then(function (response) {
            return response.text();
        }).then(function (result) {
            var errorMessage = form.querySelector('.contact__form__message--error');
            var successMessage = form.querySelector('.contact__form__message--success');

            if (result === 'Accepted') {
                successMessage.removeAttribute('hidden');
                form.reset();
            } else {
                errorMessage.removeAttribute('hidden');
            }
        });
    }

    function initMobileMenu() {
        var link = document.querySelector('[data-toggle-menu]');
        var menu = document.querySelector('[data-menu]');

        link.addEventListener('click', function() {
            if (menu.classList.contains('menu--toggled')) {
                menu.classList.remove('menu--toggled');
            } else {
                menu.classList.add('menu--toggled');
            }
        }, false);
    }

    function initForm(form) {
        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                submitForm(form);
            });
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var form = document.querySelector('#contact-form');

        initForm(form);
        initMobileMenu();
    }, false);
} ());
