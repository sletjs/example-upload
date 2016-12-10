'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: true,
    upload: { dest: './uploads/'}
});

app.defineController(require('slet-uploadcontroller'))

app.router('/', require('./uploadctrl') )  

app.start(3000) 