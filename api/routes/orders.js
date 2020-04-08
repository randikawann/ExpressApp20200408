const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'order get'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'order post'
    })
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: "order",
        id: req.params.orderID
    });

});


router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: "deleted order "
    });
});

module.exports = router;