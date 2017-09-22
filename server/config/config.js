//This file holds any configuration variables we may need
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
        uri: 'mongodb://lesly87:Password8@ds123124.mlab.com:23124/cen3031db', //place the URI of your mongo database here.
    },
    googleMaps: {
        key: 'AIzaSyBYRrNH2zytvjxNW0WpYpYv8aOJ1CXf35E'
    },
    port: 8080
};