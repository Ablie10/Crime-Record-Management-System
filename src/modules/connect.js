const mongoose = require('mongoose');

const URI = "mongodb://localhost:27017";

const connect = () => { 
    return mongoose.connect(URI, {
        useUnifiedtopology:true,
        autoIndex:false,
    })
};

module.exports=connect;