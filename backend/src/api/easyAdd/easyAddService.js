const EasyAdd = require('./easyAdd')

EasyAdd.methods(['get', 'post', 'put', 'delete'])
EasyAdd.updateOptions({ new: true, runValidators: true })

module.exports = EasyAdd