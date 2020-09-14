/* eslint-disable import/no-extraneous-dependencies */
const sassdoc = require('sassdoc'),
    config = require('../sassdoc.config');

sassdoc('./lib', config).then(
    () => {
        console.log('Documentation has been generated');
    },
    (err) => {
        console.log('Error Occured', err);
    },
);