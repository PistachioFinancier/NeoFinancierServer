const mongoose = require('mongoose');

const assetSchema = mongoose.Schema({
    type:{
        type:String,
        enum:['Territory','Category','Property Type']
    },
    value:{
        type: String
    }

});

module.exports = mongoose.model('Asset', assetSchema);