const Model = require("../modules/Category");

const getCategories = async(req, res) => {
    
    await Model.find()
    .then(doc => {
        res.json(doc)
    })
    .catch((err) => {
        res.json(err.message)
        console.log(err.message)
    })
}

const addCategory = async(req, res) => {
    try{
        const newCategory = new Model({
            name: req.body.name
        })
        newCategory.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.json(err.message)
        })
    }
    catch(err){
        res.json(err.message)
    }
}


module.exports = {getCategories, addCategory};
