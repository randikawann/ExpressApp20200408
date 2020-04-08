const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'handeling get request from products/'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'handeling post request from products/'
    })
});

router.get('/:productID', (req, res, next) => {
    const id = req.params.productID;
    if(id === 'special'){
        res.status(200).json({
            message: "you discover the special id"
        });
    }else{
        res.status(200).json({
            message: "You pass an id"
        });
    }

});

router.patch('/:products', (req, res, next) => {
    res.status(200).json({
        message: "Update products "
    });
});

router.delete('/:products', (req, res, next) => {
    res.status(200).json({
        message: "deleted products "
    });
});

module.exports = router;