"use strict";
let {Given, When, Then} = require('cucumber');
let homePage = require('./homePage.js');
let utils = require('./../Utils/utils.js');
const properties = require('./pageObject');


When(/^el usuario abre la web de angular$/, function (callback) {
    homePage.angularPage(callback);
});

Then(/^la web abierta es la correcta$/, function (callback) {
    homePage.urlOpened(callback);
});
When(/^abrimos la seccion (.*)$/, function (seccion, callback) {
    homePage.clickSeccion(seccion, callback);
});
Then(/^se abre la seccion (.*)$/, function (seccion, callback) {
    homePage.urlSeccion(seccion,callback);
});
When(/^buscamos la palabra (.*)$/, function (palabra, callback) {
    homePage.buscarPalabra(palabra,callback);
});
