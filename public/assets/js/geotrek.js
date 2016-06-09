'use strict';
(function () {

    function getParams(form) {

        if (form) {

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
    }

    function handleReponse(form, request) {
        var errorMessage = form.querySelector('.contact__form__message--error');
        var successMessage = form.querySelector(
            '.contact__form__message--success'
        );

        if(request.readyState === XMLHttpRequest.DONE) {

            console.log(request.responseText);
            if (request.status === 200) {
                successMessage.removeAttribute('hidden');
            } else {
                errorMessage.removeAttribute('hidden');
            }
        }
    }

    function submitForm(form) {

        if (form) {
            var request = new XMLHttpRequest();
            var url = 'http://getsimpleform.com/messages/ajax?form_api_token=e81d577ce1527ee5f3cd7ecc6208826f';

            var params = getParams(form);

            request.open("POST", url, true);
            request.setRequestHeader(
                "Content-type", "application/x-www-form-urlencoded"
            );
            request.onreadystatechange = handleReponse(form, request);
            request.send(params);
        }
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

    document.addEventListener('DOMContentLoaded', function() {
        var form = document.querySelector('#contact-form');
        initMobileMenu();

        if (form) {

        }
    }, false);
} ());
