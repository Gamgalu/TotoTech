// ==UserScript==
// @namespace    Hackathon
// @name         Hackathon Assets
// @match        https://www.otto.de/*
// @run-at       document-idle
// @grant        unsafeWindow
// ==/UserScript==

(function(window) {
    'use strict';

    window.hackathon_assetLoader.integrate([
        {
            type: 'template',
            id: 'template',
            src: 'http://localhost:8000/static/appShirt/landingpage.html'
        },
        {
            type: 'js',
            src: 'https://code.jquery.com/jquery-3.4.1.js'
        },
        {
            type: 'js',
            src: 'https://cdn.jsdelivr.net/npm/@tensorflow-models/posenet'
        },
        {
            type: 'js',
            src: 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs'
        },
        {
            type: 'js',
            src: 'https://use.fontawesome.com/releases/v5.3.1/js/all.js'
        },
        {
            type: 'js',
            src: '//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js'
        },
        {
            type: 'css',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css'
        }
    ]);

})(unsafeWindow || window);