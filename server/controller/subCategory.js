const Model = require("../modules/SubCategory");

const getSubCategories = async(req, res) => {
    
    await Model.find()
    .then(doc => {
        res.json(doc)
    })
    .catch((err) => {
        res.json(err.message)
        console.log(err.message)
    })
}

const addSubCategory = async(req, res) => {
    try{
        const newCategory = new Model({
            name: req.body.name,
            category_id: req.body.category_id
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

module.exports = {getSubCategories, addSubCategory};
