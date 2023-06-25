const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/HABBIT_TRACKER_APP_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console,"Error connecting to mongodb"));
db.once('open',function(){
    console.log('connection to database :: mongodb');
    

});
module.exports = db;