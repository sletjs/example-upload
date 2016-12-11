'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: true,
    // upload: { dest: './uploads/'}
});

// slet@1.0.8之后可选，会自动注入依赖
// app.defineController(require('slet-uploadcontroller'))

app.router('/', ('./uploadctrl') )  

app.start(3000) 