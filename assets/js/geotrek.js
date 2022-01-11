'use strict';
(function () {
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
        initMobileMenu();
    }, false);
} ());
