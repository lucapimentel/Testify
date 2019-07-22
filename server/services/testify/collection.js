const model = require('../../models');

function GetAllCollections(req, res) {

    model.Collection.findAll({})
        .then(collection => res.json({
            error: false,
            data: collection
        }))
        .catch(error => console.log(error));

};

module.exports = {
    GetAllCollections: GetAllCollections
};