module.exports = 'Hello world';

//or

exports.SimpleMessage = 'Hello world';

//or

module.exports.SimpleMessage = 'Hello world';

//or

module.exports = function (msg) { 
   console.log(msg);
};

//or

module.exports.log = function (msg) { 
   console.log(msg);
};

//or

module.exports = {
   firstName: 'James',
   lastName: 'Bond'
}