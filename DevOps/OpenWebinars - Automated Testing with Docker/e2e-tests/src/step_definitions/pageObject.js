"use strict";
module.exports = {
    homePage: {
        url: "https://angular.io/",
        boton: {
            start: element(by.css('[href="docs"]')),
            features: element(by.css('[href="features"]')),
            resources: element(by.css('[href="resources"]')),
            events: element(by.css('[href="events"]'))
        },
        search: element(by.css('[aria-label="search"]'))
    }
};
