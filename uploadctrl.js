'use strict';

const UploadController = require('slet').UploadController

module.exports = class MyUploadController extends UploadController {
  constructor(app, ctx, next) {
    super(app, ctx, next)
    this.post_filter = [this.upload.single('avatar')]
  }
  
  post() { 
    return {
      msg: 'this is a upload'
    }
  } 
}
