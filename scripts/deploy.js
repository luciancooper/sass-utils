/* eslint-disable import/no-extraneous-dependencies */
const { publish } = require('gh-pages');

publish('docs', {
    message: 'docs: deploy to github pages',
});