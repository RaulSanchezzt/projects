"use strict";

const protractor = require('protractor');
const chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var utils = require('./../Utils/utils.js');
const pageObject = require('./pageObject');
const ecTimeout = 15000;
var { setDefaultTimeout } = require("cucumber");
setDefaultTimeout(60 * 1000);

const log4js = require('log4js');
log4js.configure({
    appenders: {
        out: {type: 'stdout'}
    },
    categories: {
        default: {appenders: ['out'], level: browser.params.level ? browser.params.level : 'INFO'}
    }
});

var logger = log4js.getLogger();

module.exports = {
    /**
     * Función para abrir la web principal de angular.
     * @param callback
     */
    angularPage: function (callback) {
        browser.get(pageObject.homePage.url).then(function () {
            logger.info('Navegamos a: https://angular.io/ ');
            callback(); // To tell the cucumber that we are done with thi
        });
    },


    /**
     * Función para comprobar que se ha abierto la web de angular.
     * @param callback
     */
    urlOpened: function (callback) {
        browser.wait(protractor.ExpectedConditions.urlContains(pageObject.homePage.url), ecTimeout).then(function () {
            logger.info('Web de ' + pageObject.homePage.url + 'abierta');
            callback();
        });
    },

    /**
     * Función para hacer click en una sección
     * @param seccion
     * @param callback
     */
    clickSeccion: function (seccion, callback) {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(pageObject.homePage.boton.features), ecTimeout).then(function () {
            pageObject.homePage.boton[seccion].click().then(function () {
                logger.info("La seccion" + seccion + "ha sido pulsada.");
                callback();
            });
        });
    },

    /**
     * Función para comprobar que una sección se ha abierto
     * @param seccion
     * @param callback
     */
    urlSeccion: function (seccion, callback) {
        browser.wait(protractor.ExpectedConditions.urlContains(seccion)).then(function () {
            logger.info("La sección de " + seccion + "ha sido abierta");
            callback();
        });
    },

    /**
     * Función para introducir una palabra en el buscador.
     * @param palabra
     * @param callback
     */
    buscarPalabra: function (palabra, callback) {
        browser.wait(protractor.ExpectedConditions.visibilityOf(pageObject.homePage.search), ecTimeout).then(function () {
            pageObject.homePage.search.sendKeys(palabra).then(function () {
                logger.info("Palabra " + palabra + "insertada en el buscador");
                callback();
            })
        });
    }
};
