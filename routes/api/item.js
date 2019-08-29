const express = require('express');
const router = express.Router();

let Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find().sort({
            Date: -1
        })
        .then(items => res.json(items))
        .catch(error => console.error(error))

})
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save().then(item => res.json(item))
        .catch(error => console.error(error))

})

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({
            sucess: true
        })))
        .catch(error => console.error(error))

})




module.exports = router;