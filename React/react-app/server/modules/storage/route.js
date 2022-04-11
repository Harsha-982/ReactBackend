const Router = require('express').Router()
const {getReumableUrlController,getStorageInstanceController} =require('./controller')

Router.route('/getUrl').get(getReumableUrlController)
Router.route('/files').get(getStorageInstanceController)
module.exports=Router